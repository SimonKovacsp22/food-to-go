import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SettingsScreen from "../../features/screens/SettingsScreen";
import FavouritesScreen from "../../features/screens/FavouritesScreen";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../theme/colors";
import CameraScreen from "../../features/screens/camera/CameraScreen";

const SettingsStack = createStackNavigator();

const BackButton = styled(Button).attrs({
  textColor: colors.brand.primary,
})``;

const SettingsNavigator = ({ navigation, route }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
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
        <SettingsStack.Screen name="Camera" component={CameraScreen} />
      </SettingsStack.Group>
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
