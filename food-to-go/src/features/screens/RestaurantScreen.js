import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { StatusBar, SafeAreaView, FlatList } from "react-native";
import RestaurantInfo from "../../components/RestaurantInfo";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
const SearchSafeArea = styled.View`
  ${StatusBar.currentHeight && `margin-top:  ${StatusBar.currentHeight}`}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchSafeArea>
        <Searchbar />
      </SearchSafeArea>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      >
        <RestaurantInfo />
      </RestaurantList>
    </SafeArea>
  );
};

export default RestaurantScreen;
