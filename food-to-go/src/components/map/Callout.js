import { Platform } from "react-native";
import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes["title"]};
  text-align: center;
`;

const isAndroid = Platform.OS === "android";

const RestaurantImage = styled.Image`
  width: 120px;
  height: 100px;
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[2]};
`;
const RestaurantWebView = styled(WebView)`
  width: 120px;
  height: 100px;
  padding: ${(props) => props.theme.space[3]};
  border-radius: 10px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const MapCallout = ({ restaurant }) => {
  const Image = isAndroid ? RestaurantWebView : RestaurantImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Title>{restaurant.name}</Title>
    </Item>
  );
};

export default MapCallout;
