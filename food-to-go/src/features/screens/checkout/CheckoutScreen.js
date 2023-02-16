import { ScrollView } from "react-native";
import Text from "../../../components/Typography";
import CreditCard from "../../../components/checkout/CreditCard";
import React, { useContext, useState } from "react";
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
import { PaymentProcessing } from "../../../components/checkout/Checkout.styles";

const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      console.log("error card");
      setIsLoading(false);
      navigation.navigate("Error", {
        error: "Please fill in a valid credit card",
      });
      return;
    }
    console.log("here");
    paymentRequest(card.id, sum)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        setCard(null);
        navigation.navigate("Success");
      })
      .catch((e) => {
        setIsLoading(false);
        navigation.navigate("Error", {
          error: e,
        });
      });
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Spacer size={"medium"} />
          <Text>Cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <Spacer />
      {isLoading ? (
        <PaymentProcessing />
      ) : (
        <>
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
          <PayButton icon="currency-usd" onPress={onPay} disabled={isLoading}>
            Pay Now
          </PayButton>
          <ClearButton icon="cart-off" onPress={clearCart} disabled={isLoading}>
            Empty Cart
          </ClearButton>
        </>
      )}

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
