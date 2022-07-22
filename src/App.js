import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Payment from "./Payment";
import Order from "./Order";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe(
//   "pk_test_51LNWjISJEGuRAWW5uhCWblQngcf6ufpttn1qNXGDx9IXelmpHhjfi7islU8SNqgYaNGuz0K0uoqEsOXxX3LiKYAu00xi5MdSxB"
// );

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />

                <Order />
              </>
            }
          />
          {/* <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          /> */}
          <Route
            path="/login"
            element={
              <>
                {/* <h1>Login page</h1> */}
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
