import camelize from "camelize";
import { mocks } from "./index";

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
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily:
        restaurant.business_status === "OPERATIONAL" ? false : true,
    };
  });

  return camelize(mappedData);
};
