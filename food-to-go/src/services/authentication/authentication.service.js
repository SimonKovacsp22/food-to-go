import { View, Text } from "react-native";
import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDu7u6BhKzEl2simJoUhMUtvMmHIKidBdM",
  authDomain: "food-to-go-376717.firebaseapp.com",
  projectId: "food-to-go-376717",
  storageBucket: "food-to-go-376717.appspot.com",
  messagingSenderId: "493381787421",
  appId: "1:493381787421:web:c861124155317ffb340bf4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setIsAuthenticated(true);
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const Authetication = () => {
  return (
    <View>
      <Text>Authetication</Text>
    </View>
  );
};

export default Authetication;
