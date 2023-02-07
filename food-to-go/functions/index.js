import functions from "firebase-functions";
import { geocodeRequest } from "./geocode/index.js";
import { placesRequest } from "./places/index.js";

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

export const geoCode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response);
});

export const placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response);
});
