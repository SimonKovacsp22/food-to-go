import functions from "firebase-functions";
import { geocodeRequest } from "./geocode/index.js";
import { placesRequest } from "./places/index.js";
import { payRequest } from "./pay/index.js";
import Stripe from "stripe";
const stripeClient = Stripe(functions.config().stripe.key);

export const geoCode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response);
});

export const placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response);
});

export const pay = functions.https.onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});
