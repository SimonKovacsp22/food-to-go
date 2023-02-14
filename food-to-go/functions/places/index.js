import { mocks, mockImages } from "./mock/index.js";
import url from "url";
import { Client } from "@googlemaps/google-maps-services-js";
import functions from "firebase-functions";

const client = new Client({});

const addGoogleImage = (restaurant) => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];
    return restaurant;
  }
  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
      functions.config().google.key
    }`,
  ];
  return restaurant;
};

export const placesRequest = (req, res) => {
  const { location, mock } = url.parse(req.url, true).query;
  if (mock === "true") {
    if (!mocks[location]) res.send([]);
    const restaurants = mocks[location].results.map((restaurant) => {
      const randomPhoto =
        mockImages[Math.floor(Math.random() * mockImages.length)];
      restaurant.photos[0] = randomPhoto;
      return restaurant;
    });
    return res.send(restaurants);
  }

  client
    .placesNearby({
      params: {
        location,
        radius: 1500,
        type: "restaurant",
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((response) => {
      const restaurantsWithImages = addImagesToRestaurants(
        response.data.results
      );

      return res.json(restaurantsWithImages);
    })
    .catch((e) => {
      res.status(400);
      return res.send(e);
    });
};

function addImagesToRestaurants(restaurants) {
  const mapped = restaurants.map((restaurant) => {
    addGoogleImage(restaurant);
    return restaurant;
  });
  return mapped;
}
