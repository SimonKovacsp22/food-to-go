import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../../components/SafeArea";
import RestaurantInfo from "../../components/RestaurantInfo";
import React, { useContext, useState } from "react";
import Spacer from "../../components/Spacer";
import { OrderButton } from "../../components/RestaurantInfoStyles";
import { CartContext } from "../../services/cart/cart.context";

const DetailScreen = ({ navigation, route }) => {
  const { addToCart } = useContext(CartContext);
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <SafeArea style={{ marginTop: 0 }}>
      <RestaurantInfo restaurant={route.params}></RestaurantInfo>
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Oat Meal" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Oat Meal" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Oat Meal" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Vine" />
          <List.Item title="Fanta" />
          <List.Item title="Coke" />
        </List.Accordion>
      </ScrollView>
      <Spacer position={"bottom"} size={"large"}>
        <OrderButton
          icon={"credit-card-outline"}
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, route.params);
            navigation.navigate("Checkout");
          }}
        >
          Order Special $12.99
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};

export default DetailScreen;
