import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import MapView, { Marker, Callout } from "react-native-maps";
import MapSearch from "../../components/map/MapSearch";
import { RestaurantContext } from "../../services/restaurants/restaurants.context";
import { LocationContext } from "../../services/location/location.context";
import MapCallout from "../../components/map/Callout";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
            title={restaurant.name}
            description={restaurant.address}
          >
            <Callout
              onPress={() =>
                navigation.navigate("Detail", { ...restaurant, detail: true })
              }
            >
              <MapCallout restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </Map>
    </>
  );
};

export default MapScreen;
