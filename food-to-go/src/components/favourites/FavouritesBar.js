import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import React from "react";
import Spacer from "../Spacer";
import SimpleRestaurantCard from "../map/Callout";
import Text from "../Typography";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
const FavouritesBar = ({ favourites, detailNavigate }) => {
  if (favourites.length === 0) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position={"left"} size={"medium"}>
        <Spacer position={"bottom"} size={"small"}>
          <Text>Favourites</Text>
        </Spacer>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <Spacer key={restaurant.name} position={"left"} size={"medium"}>
            <TouchableOpacity
              onPress={() =>
                detailNavigate("Detail", { ...restaurant, detail: true })
              }
            >
              <SimpleRestaurantCard restaurant={restaurant} favourites={true} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
