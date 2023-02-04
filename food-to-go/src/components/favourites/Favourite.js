import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../services/favourites/favorites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, removeFromFavourites, addToFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((element) => {
    return element.placeId === restaurant.placeId;
  });
  return (
    <FavouriteButton
      onPress={() => {
        if (isFavourite) {
          removeFromFavourites(restaurant);
        } else {
          addToFavourites(restaurant);
        }
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};

export default Favourite;
