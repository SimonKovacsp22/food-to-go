import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestarantScreen from "../../features/screens/RestaurantScreen";
import DetailScreen from "../../features/screens/DetailScreen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen name="Instances" component={RestarantScreen} />
      <RestaurantStack.Screen name="Detail" component={DetailScreen} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
