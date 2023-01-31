import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../components/SafeArea";
import { FlatList } from "react-native";
import RestaurantInfo from "../../components/RestaurantInfo";
import {
  getRestaurants,
  transformData,
} from "../../services/restaurants/mock/restaurants.service";
import { RestaurantContext } from "../../services/restaurants/mock/restaurants.context";

const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantContext);
  return (
    <SafeArea>
      <Search>
        <Searchbar style={{ backgroundColor: "white" }} />
      </Search>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item}
      >
        <RestaurantInfo />
      </RestaurantList>
    </SafeArea>
  );
};

export default RestaurantScreen;
