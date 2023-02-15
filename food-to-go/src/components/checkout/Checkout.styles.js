import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Avatar, Button, TextInput } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const NameInput = styled(TextInput).attrs({
  mode: "outlined",
})`
  width: 80%;
  align-self: center;
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  textColor: "white",
})`
  width: 80%;
  border-radius: 5px;
  align-self: center;
  margin-top: 16px;
`;

export const ClearButton = styled(Button).attrs({
  buttonColor: colors.text.error,
  textColor: "white",
})`
  width: 80%;
  margin-top: 8px;
  border-radius: 5px;
  align-self: center;
`;
