import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect, useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    requestPermission();
  }, []);

  const snap = async () => {
    const { uri } = await Camera.takePictureAsync();
    await AsyncStorage.setItem(`${user.uid}-photo`, uri);
    navigation.goBack();
  };

  if (!permission) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>You need to allow this app to use your camera.</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera type={type} ratio={"16:9"}></ProfileCamera>
    </TouchableOpacity>
  );
};

export default CameraScreen;
