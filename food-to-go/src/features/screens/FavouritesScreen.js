import { TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { SafeArea } from "../../components/SafeArea";
import { RestaurantList } from "./RestaurantScreen";
import { FavouritesContext } from "../../services/favourites/favorites.context";
import RestaurantInfo from "../../components/RestaurantInfo";
import styled from "styled-components/native";
import Text from "../../components/Typography";

const NoFavouritesArea = styled.View`
  justify-content: center;
  align-items: center;
`;

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length === 0 ? (
    <NoFavouritesArea>
      <Text variant="title">No favourites</Text>
    </NoFavouritesArea>
  ) : (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Detail", { ...item, detail: true })
            }
          >
            <RestaurantInfo restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      ></RestaurantList>
    </SafeArea>
  );
};

export default FavouritesScreen;
