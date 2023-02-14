import { View, Text } from "react-native";
import React, { useState } from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../services/checkout/checkout.service";

const CreditCard = ({ name = "SK" }) => {
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
      const info = await cardTokenRequest(card);
    }
  };
  return (
    <View>
      <LiteCreditCardInput onChange={onInput}></LiteCreditCardInput>
    </View>
  );
};

export default CreditCard;
