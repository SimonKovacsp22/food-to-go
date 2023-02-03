import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../components/SafeArea";
import { FlatList, TouchableOpacity } from "react-native";
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

const RestaurantScreen = ({ navigation }) => {
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
