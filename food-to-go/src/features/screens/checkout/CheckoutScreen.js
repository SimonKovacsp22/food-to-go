import { ScrollView } from "react-native";
import Text from "../../../components/Typography";
import CreditCard from "../../../components/checkout/CreditCard";
import React, { useContext, useEffect, useState } from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/SafeArea";
import { CartContext } from "../../../services/cart/cart.context";
import RestaurantInfo from "../../../components/RestaurantInfo";
import { paymentRequest } from "../../../services/checkout/checkout.service";
import {
  CartIcon,
  CartIconContainer,
  ClearButton,
  NameInput,
  PayButton,
} from "../../../components/checkout/Checkout.styles";
import Spacer from "../../../components/Spacer";

const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      console.log("error card");
      return;
    }
    console.log("here");
    paymentRequest(card.id, sum);
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <Spacer />
      <Spacer position={"left"}>
        <Text>Your Order</Text>
      </Spacer>
      <NameInput
        label="Name"
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      {name.length > 0 && (
        <CreditCard name={name} onSuccess={setCard}></CreditCard>
      )}
      <PayButton icon="currency-usd" onPress={onPay}>
        Pay Now
      </PayButton>
      <ClearButton icon="cart-off" onPress={clearCart}>
        Empty Cart
      </ClearButton>

      <ScrollView>
        <List.Section>
          {cart.map(({ item, price }, idx) => (
            <List.Item key={idx} title={`${item} - ${price / 100}`} />
          ))}
        </List.Section>
        <Spacer position={"left"}>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};

export default CheckoutScreen;
