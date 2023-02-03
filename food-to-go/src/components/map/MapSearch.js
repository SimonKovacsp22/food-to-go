import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../services/location/location.context";

const SearchBar = styled(Searchbar)`
  padding: ${(props) => props.theme.space[0]};
  position: absolute;
  z-index: 999;
  top: ${(props) => props.theme.sizes[2]};
  margin-horizontal: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState(keyword);

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  return (
    <SearchBar
      placeholder="Search for a location"
      value={searchTerm}
      icon="map"
      style={{ backgroundColor: "white" }}
      onChangeText={(text) => {
        setSearchTerm(text);
      }}
      onSubmitEditing={() => {
        search(searchTerm);
      }}
    />
  );
};

export default MapSearch;
