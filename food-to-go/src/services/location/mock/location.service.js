import camelize from "camelize";
import { locations } from "./location.mock";

export const getLocations = (searchTerm = "san francisco") => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Wrong location");
    }
    resolve(locationMock);
  });
};

export const transformLocation = (result) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
