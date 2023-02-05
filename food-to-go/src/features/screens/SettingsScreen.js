import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { SafeArea } from "../../components/SafeArea";
import styled from "styled-components/native";
import { Button, List, Avatar } from "react-native-paper";
import Text from "../../components/Typography";
import Spacer from "../../components/Spacer";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
  const { onSignOut, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
        <AvatarContainer>
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          <Spacer>
            <Text variant="label">{user.email}</Text>
          </Spacer>
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
