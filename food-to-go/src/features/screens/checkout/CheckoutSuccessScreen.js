import React from "react";
import { SafeArea } from "../../../components/SafeArea";
import Text from "../../../components/Typography";
import {
  CartIcon,
  CartIconContainer,
} from "../../../components/checkout/Checkout.styles";
import { colors } from "../../../infrastructure/theme/colors";
import Spacer from "../../../components/Spacer";

const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon
          icon="check-bold"
          color={"white"}
          style={{ backgroundColor: colors.brand.primary }}
        ></CartIcon>
        <Spacer size={"medium"}></Spacer>
        <Text>Your payment has been processed successfuly.</Text>
      </CartIconContainer>
    </SafeArea>
  );
};

export default CheckoutSuccessScreen;
