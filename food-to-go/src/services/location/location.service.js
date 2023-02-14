import camelize from "camelize";

export const getLocations = async (searchTerm) => {
  const location = `https://us-central1-food-to-go-376717.cloudfunctions.net/geoCode?city=${searchTerm}&mock=true`;
  return fetch(location).then((res) => res.json());
};

export const transformLocation = (result) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
