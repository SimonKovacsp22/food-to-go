import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CheckoutScreen from "../../features/screens/checkout/CheckoutScreen";
import CheckoutSuccessScreen from "../../features/screens/checkout/CheckoutSuccessScreen";
import CheckoutError from "../../features/screens/checkout/CheckoutError";

const CheckoutStack = createStackNavigator();

const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CheckoutStack.Screen name="Checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen name="Success" component={CheckoutSuccessScreen} />
      <CheckoutStack.Screen name="Error" component={CheckoutError} />
    </CheckoutStack.Navigator>
  );
};

export default CheckoutNavigator;
