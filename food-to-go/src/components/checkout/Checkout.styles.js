import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Avatar, TextInput } from "react-native-paper";

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
  margin: ${(props) => props.theme.space[3]};
`;
