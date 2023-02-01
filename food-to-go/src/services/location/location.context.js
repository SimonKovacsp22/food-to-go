import React, { createContext, useState, useEffect } from "react";
import { getLocations, transformLocation } from "./mock/location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchTerm = "San Francisco") => {
    setIsLoading(true);
    setKeyword(searchTerm);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    getLocations(keyword.toLowerCase())
      .then(transformLocation)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
