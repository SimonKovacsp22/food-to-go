import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51LuZvELtdxkAfcggzz4LGX9g6RrN8i3iJkE3hnzhY1y19QhIJ21gVzkudXyRGN2FRRTgZRUPwG0U9QkimYcc00Qo00xIJvH685"
);

export const cardTokenRequest = async (card) => {
  const info = await stripe.createToken({ card });
  return info;
};

export const paymentRequest = (token, amount) => {
  console.log(token, amount);
  return fetch(`https://us-central1-food-to-go-376717.cloudfunctions.net/pay`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
      amount,
    }),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};
