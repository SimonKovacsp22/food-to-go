import { ScrollView } from "react-native";
import Text from "../../../components/Typography";
import CreditCard from "../../../components/checkout/CreditCard";
import React, { useContext, useEffect, useState } from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/SafeArea";
import { CartContext } from "../../../services/cart/cart.context";
import RestaurantInfo from "../../../components/RestaurantInfo";
import {
  CartIcon,
  CartIconContainer,
  NameInput,
} from "../../../components/checkout/Checkout.styles";
import Spacer from "../../../components/Spacer";

const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);
  const [name, setName] = useState("");

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
      <ScrollView>
        <List.Section>
          {cart.map(({ item, price }, idx) => (
            <List.Item key={idx} title={`${item} - ${price / 100}`} />
          ))}
        </List.Section>
        <Spacer position={"left"}>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        {name.length > 0 && <CreditCard name={name}></CreditCard>}
      </ScrollView>
    </SafeArea>
  );
};

export default CheckoutScreen;
