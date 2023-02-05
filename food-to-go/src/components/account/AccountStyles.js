import { View, Text, ImageBackground } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { colors } from "../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";

const BackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AccountStyles = () => {
  return <BackgroundImage></BackgroundImage>;
};

export const AccountContainer = styled.View`
  width: 80%;
  max-width: 330px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[5]};
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  align-items: center;
  justify-content: center;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  border-radius: 4px;
  padding: ${(props) => props.theme.space[1]};
`;

export const AuthInput = styled(TextInput).attrs({
  mode: "outlined",
})``;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;

export default AccountStyles;
