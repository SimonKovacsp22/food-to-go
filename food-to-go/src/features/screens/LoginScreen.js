import { View } from "react-native";
import React, { useState, useContext } from "react";
import AccountStyles, {
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../../components/account/AccountStyles";
import Spacer from "../../components/Spacer";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import Text from "../../components/Typography";
import { ActivityIndicator } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <View style={{ flexGrow: 1 }}>
      <AccountStyles></AccountStyles>
      <AccountCover>
        <AccountContainer>
          <AuthInput
            placeholder={"E-mail"}
            label={"E-mail"}
            textContentType={"emailAddress"}
            keyboardType={"email-address"}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Spacer position={"bottom"} size={"medium"} />
          <AuthInput
            placeholder={"Password"}
            label={"Password"}
            textContentType={"password"}
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          {!error && <Spacer position={"bottom"} size={"large"} />}
          {error && (
            <Spacer position={"top"} size={"medium"}>
              <Spacer position={"bottom"} size={"medium"}>
                <Text variant={"error"}>{error}</Text>
              </Spacer>
            </Spacer>
          )}
          {isLoading ? (
            <ActivityIndicator animating color="tomato" size={35} />
          ) : (
            <AuthButton
              icon={"lock-open-outline"}
              mode="contained"
              onPress={() => {
                onLogin(email, password);
              }}
            >
              Login
            </AuthButton>
          )}
        </AccountContainer>
        <Spacer>
          <AuthButton
            mode="contained"
            onPress={() => {
              navigation.goBack();
            }}
          >
            Back
          </AuthButton>
        </Spacer>
      </AccountCover>
    </View>
  );
};

export default LoginScreen;
