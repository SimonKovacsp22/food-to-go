import { View, Text } from "react-native";
import React, { useState, useContext } from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../services/checkout/checkout.service";

const CreditCard = ({ name, onSuccess, onError }) => {
  const onInput = async ({ values, status }) => {
    let done = !Object.values(status).includes("incomplete");
    if (done) {
      const expiry = values.expiry.split("/");
      const card = {
        number: values.number,
        exp_month: expiry[0],
        exp_year: expiry[1],
        cvc: values.cvc,
        name,
      };
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (e) {
        onError();
      }
    }
  };
  return (
    <View>
      <LiteCreditCardInput onChange={onInput}></LiteCreditCardInput>
    </View>
  );
};

export default CreditCard;
