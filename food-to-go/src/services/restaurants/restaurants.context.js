import React, { useState, useEffect, createContext, useContext } from "react";
import { LocationContext } from "../location/location.context";
import { transformData, getRestaurants } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    getRestaurants(loc)
      .then((data) => {
        return transformData(data);
      })
      .then((data) => {
        setIsLoading(false);
        setError(false);

        setRestaurants(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        setRestaurants([]);
        console.log("Error", err);
      });
  };

  useEffect(() => {
    const locationString = `${location.lat},${location.lng}`;
    retrieveRestaurants(locationString);
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
