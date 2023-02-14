import { locations as locationsMock } from "./geocode.mock.js";
import { Client } from "@googlemaps/google-maps-services-js";
import functions from "firebase-functions";
import url from "url";

const client = new Client({});

export const geocodeRequest = (req, res) => {
  const { city, mock } = url.parse(req.url, true).query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    res.json(locationMock);
  }
  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((response) => {
      return res.json(response.data);
    })
    .catch((e) => {
      res.status(400);
      return res.send(e);
    });
};
