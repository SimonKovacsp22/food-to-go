import styled from "styled-components/native";
import { Button, Card } from "react-native-paper";
import { colors } from "../infrastructure/theme/colors";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) =>
    props.detail ? props.theme.space[1] : props.theme.space[3]};
  border-radius: ${(props) =>
    props.detail ? props.theme.space[0] : props.theme.space[2]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[2]};
`;

export const OpenFlex1 = styled.View`
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const OrderButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
  border-radius: 4px;
  align-self: center;
`;
