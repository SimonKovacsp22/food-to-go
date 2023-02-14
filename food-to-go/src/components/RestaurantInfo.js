import React from "react";
import Spacer from "./Spacer";
import Typography from "./Typography";
import {
  Icon,
  OpenFlex1,
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  Info,
} from "./RestaurantInfoStyles";
import Favourite from "./favourites/Favourite";

import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import open from "../../assets/open";
import { FadeInView } from "../components/animations/fade.animation";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurant",
    icon = "https://cdn-icons-png.flaticon.com/512/685/685493.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg",
    ],
    address = "somewhere",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = true,
    detail = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <FadeInView>
      <RestaurantCard elevation={5} detail={detail}>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Typography variant="title">{name}</Typography>
          <Rating>
            {ratingArray.map((_, idx) => (
              <SvgXml key={idx} xml={star} width={20} height={20} />
            ))}
            <OpenFlex1>
              {isClosedTemporarily && (
                <Typography variant="error">CLOSED TEMPORARILY</Typography>
              )}

              <Spacer size="large" position="left">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>

              <Spacer size={"large"} position={"left"}>
                <Icon source={{ uri: icon }} />
              </Spacer>
            </OpenFlex1>
          </Rating>
          <Typography variant="caption">{address}</Typography>
        </Info>
      </RestaurantCard>
    </FadeInView>
  );
};

export default RestaurantInfo;
