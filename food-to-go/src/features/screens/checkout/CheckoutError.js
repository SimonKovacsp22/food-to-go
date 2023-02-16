import { SafeArea } from "../../../components/SafeArea";
import {
  CartIcon,
  CartIconContainer,
} from "../../../components/checkout/Checkout.styles";
import Text from "../../../components/Typography";
import { colors } from "../../../infrastructure/theme/colors";
import Spacer from "../../../components/Spacer";

const CheckoutError = ({ route }) => {
  const { error } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" style={{ backgroundColor: colors.ui.error }}>
          {error}
        </CartIcon>
        <Spacer size={"medium"}></Spacer>
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};

export default CheckoutError;
