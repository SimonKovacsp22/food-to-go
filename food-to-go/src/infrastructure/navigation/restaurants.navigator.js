import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RestarantScreen from "../../features/screens/RestaurantScreen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="Instances" component={RestarantScreen} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
