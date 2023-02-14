import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../components/SafeArea";
import { FlatList, TouchableOpacity } from "react-native";
import RestaurantInfo from "../../components/RestaurantInfo";
import { RestaurantContext } from "../../services/restaurants/restaurants.context";
import Search from "../../components/Search";
import { FavouritesContext } from "../../services/favourites/favorites.context";
import FavouritesBar from "../../components/favourites/FavouritesBar";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { LocationContext } from "../../services/location/location.context";
import Text from "../../components/Typography";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const LoaderContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const RestaurantScreen = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(false);
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { error: locationError, keyword } = useContext(LocationContext);
  const { favourites, removeFromFavourites, addToFavourites } =
    useContext(FavouritesContext);
  const { user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Search
        onToggleFavourites={() => setIsToggled(!isToggled)}
        isToggledFavourites={isToggled}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          detailNavigate={navigation.navigate}
        />
      )}
      {!!error ||
        (!!locationError && (
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginLeft: 16 }}
            variant="error"
          >
            Something went wrong searching for {keyword}
          </Text>
        ))}
      {isLoading ? (
        <LoaderContainer>
          <ActivityIndicator
            animating={true}
            color={"tomato"}
            size={50}
          ></ActivityIndicator>
        </LoaderContainer>
      ) : (
        <RestaurantList
          data={restaurants}
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
      )}
    </SafeArea>
  );
};

export default RestaurantScreen;
