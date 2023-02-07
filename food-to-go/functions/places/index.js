import { mocks, mockImages } from "./mock/index.js";
import url from "url";

export const placesRequest = (req, res) => {
  const { location } = url.parse(req.url, true).query;
  if (!mocks[location]) res.send([]);
  const restaurants = mocks[location].results.map((restaurant) => {
    const randomPhoto =
      mockImages[Math.floor(Math.random() * mockImages.length)];
    restaurant.photos[0] = randomPhoto;
    return restaurant;
  });
  res.send(restaurants);
};
