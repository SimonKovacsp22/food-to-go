import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../components/SafeArea";
import { FlatList } from "react-native";
import RestaurantInfo from "../../components/RestaurantInfo";
import { RestaurantContext } from "../../services/restaurants/mock/restaurants.context";
import Search from "../../components/Search";

const RestaurantList = styled(FlatList).attrs({
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

const RestaurantScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
    <SafeArea>
      <Search />
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
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
          keyExtractor={(item) => item.name}
        >
          <RestaurantInfo />
        </RestaurantList>
      )}
    </SafeArea>
  );
};

export default RestaurantScreen;
