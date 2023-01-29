import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { StatusBar, SafeAreaView } from "react-native";
import RestaurantInfo from "../../components/RestaurantInfo";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
const SearchSafeArea = styled.View`
  ${StatusBar.currentHeight && `margin-top:  ${StatusBar.currentHeight}`}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchSafeArea>
        <Searchbar />
      </SearchSafeArea>
      <RestaurantList>
        <RestaurantInfo />
      </RestaurantList>
    </SafeArea>
  );
};

export default RestaurantScreen;
