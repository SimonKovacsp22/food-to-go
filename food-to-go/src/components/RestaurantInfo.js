import { Text, Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.sizes[1]};
`;
const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[2]};
`;
const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg",
    ],
    address = "somewhere",
    isOpenNow = "true",
    rating = 3,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map((_) => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
