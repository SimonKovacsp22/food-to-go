import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AccountNavigator from "./account.navigator";
import AppNavigator from "./app.navigation";
import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Navigation = () => {
  const { user, isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
