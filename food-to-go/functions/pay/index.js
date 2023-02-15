export const payRequest = (req, res, stripeClient) => {
  const { token, amount } = req.body;
  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      res.json(paymentIntent);
    })
    .catch((e) => res.status(400).send(e));
};
