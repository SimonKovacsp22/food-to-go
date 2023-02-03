import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState(keyword);

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchTerm}
        style={{ backgroundColor: "white" }}
        onChangeText={(text) => {
          setSearchTerm(text);
        }}
        onSubmitEditing={() => {
          search(searchTerm);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
