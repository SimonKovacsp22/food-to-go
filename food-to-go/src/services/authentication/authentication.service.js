import { View, Text } from "react-native";
import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
export const auth = getAuth(app);

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutRequest = () => {
  return signOut(auth);
};

export const registerRequest = (email, password, repeatedPassword) => {
  if (password !== repeatedPassword) {
    let error = { code: "Passwords do not match!" };
    return new Promise((res, reject) => reject(error));
  }
  return createUserWithEmailAndPassword(auth, email, password);
};

const Authetication = () => {
  return (
    <View>
      <Text>Authetication</Text>
    </View>
  );
};

export default Authetication;
