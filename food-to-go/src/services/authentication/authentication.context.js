import React, { createContext, useState } from "react";
import {
  loginRequest,
  registerRequest,
  signOutRequest,
  auth,
} from "./authentication.service";
import { onAuthStateChanged } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredentail) => {
        setUser(userCredentail);
        setIsLoading(false);
        setIsAuthenticated(true);
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.code);
      });
  };

  const onSignOut = () => {
    signOutRequest()
      .then(() => {
        setUser(null);
        setIsAuthenticated(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
    }
  });

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    registerRequest(email, password, repeatedPassword)
      .then((userCredentail) => {
        setUser(userCredentail);
        setIsLoading(false);
        setIsAuthenticated(true);
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.code);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated,
        onLogin,
        onRegister,
        onSignOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
