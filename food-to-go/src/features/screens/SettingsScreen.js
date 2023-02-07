import React, { useContext, useState, useCallback } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { SafeArea } from "../../components/SafeArea";
import styled from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
import { List, Avatar } from "react-native-paper";
import Text from "../../components/Typography";
import Spacer from "../../components/Spacer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const { onSignOut, user } = useContext(AuthenticationContext);

  const getProfilePic = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePic(user);
    }, [user])
  );

  return (
    <SafeArea>
      <List.Section>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {photo ? (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="#2182BD"
              ></Avatar.Image>
            ) : (
              <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
            )}
          </TouchableOpacity>
          {user && (
            <Spacer>
              <Text variant="label">{user.email}</Text>
            </Spacer>
          )}
        </AvatarContainer>
        <SettingsItem
          title={"Favourites"}
          description="View your favourites"
          onPress={() => navigation.navigate("Favourites")}
          left={(props) => (
            <List.Icon {...props} color="black" icon={"heart"}></List.Icon>
          )}
        ></SettingsItem>
        <SettingsItem
          title={"Logout"}
          left={(props) => (
            <List.Icon {...props} color="black" icon={"door"}></List.Icon>
          )}
          onPress={onSignOut}
        ></SettingsItem>
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;
