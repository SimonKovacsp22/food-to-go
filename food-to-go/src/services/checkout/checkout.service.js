import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51LuZvELtdxkAfcggzz4LGX9g6RrN8i3iJkE3hnzhY1y19QhIJ21gVzkudXyRGN2FRRTgZRUPwG0U9QkimYcc00Qo00xIJvH685"
);

export const cardTokenRequest = async (card) => {
  const info = await stripe.createToken({ card });
  console.log(info);
};
