import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "./firebase";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password).then((auth) => {
        Navigate("/");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          Navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's fake clone Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest Based Ads.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
