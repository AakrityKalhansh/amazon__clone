const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
// const stripe = require("stripe")(
//   "sk_test_51LNWjISJEGuRAWW5lneJxPdmKmfLwMl5d0AbHrdaqa6Wladsmg7P5eESHM8RNxclFAMDGwXn9qd8EP927rk6Z2EG00Lb9sz7QC"
// );

//API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received BOOM!!! for this amount>>>>", total);

  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: total,
  //   currency: "usd",
  // });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-9fbea/us-central1/api
