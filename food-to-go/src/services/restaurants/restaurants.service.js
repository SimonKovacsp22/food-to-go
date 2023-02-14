import camelize from "camelize";

export const getRestaurants = (location) => {
  const restaurants = `https://us-central1-food-to-go-376717.cloudfunctions.net/placesNearby?location=${location}&mock=true`;
  return fetch(restaurants).then((res) => res.json());
};

export const transformData = (data) => {
  const mappedData = data.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily:
        restaurant.business_status === "OPERATIONAL" ? false : true,
    };
  });

  return camelize(mappedData);
};
