import camelize from "camelize";
import { mocks, mockImages } from "./index";

export const getRestaurants = (location = "41.878113,-87.629799") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("wrong location!");
    }
    resolve(mock);
  });
};

export const transformData = (data) => {
  const mappedData = data.map((restaurant) => {
    restaurant.photos = [
      mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
    ];
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
