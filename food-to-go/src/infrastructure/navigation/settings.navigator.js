import { View, Text } from "react-native";
import React, { useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/screens/SettingsScreen";
import FavouritesScreen from "../../features/screens/FavouritesScreen";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../theme/colors";

const SettingsStack = createStackNavigator();

const BackButton = styled(Button).attrs({
  textColor: colors.brand.primary,
})``;

const SettingsNavigator = ({ navigation, route }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <SettingsStack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
        />
      </SettingsStack.Group>
      <SettingsStack.Group
        screenOptions={({ navigation }) => ({
          presentation: "modal",
          headerLeft: () => (
            <BackButton icon={"arrow-left"} onPress={navigation.goBack}>
              Settings
            </BackButton>
          ),
        })}
      >
        <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      </SettingsStack.Group>
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
