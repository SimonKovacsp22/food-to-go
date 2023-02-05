import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import React from "react";
import AccountStyles, {
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
} from "../../components/account/AccountStyles";
import Spacer from "../../components/Spacer";

const AccountScreen = ({ navigation }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AccountStyles></AccountStyles>
      <AccountCover>
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../assets/watermelon.json")}
          />
        </AnimationWrapper>
        <AccountContainer>
          <AuthButton
            icon={"lock-open-outline"}
            mode="contained"
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Login
          </AuthButton>
          <Spacer position={"bottom"} size={"large"} />
          <AuthButton
            icon={"email-outline"}
            mode="contained"
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Register
          </AuthButton>
        </AccountContainer>
      </AccountCover>
    </View>
  );
};

export default AccountScreen;
