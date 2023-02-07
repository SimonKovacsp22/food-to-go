import { locations as locationsMock } from "./geocode.mock.js";
import url from "url";

export const geocodeRequest = (req, res) => {
  const { city } = url.parse(req.url, true).query;
  const locationMock = locationsMock[city.toLowerCase()];
  console.log(locationMock);

  res.json(locationMock);
};
