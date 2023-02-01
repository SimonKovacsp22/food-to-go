import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  useContext,
} from "react";
import { LocationContext } from "../../location/location.context";
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
    setTimeout(() => {
      getRestaurants(loc)
        .then(({ results }) => {
          return transformData(results);
        })
        .then((data) => {
          setIsLoading(false);
          setRestaurants(data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
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
