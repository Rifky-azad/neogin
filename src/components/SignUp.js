import React, { useCallback } from "react";
import "./SignUp.css";
import { withRouter } from "react-router";
import app from "../base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="signup__container">
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>Email</label>
        <input name="email" type="email" placeholder="Email" /> <br />
        <br />
        <label>Password</label>
        <input name="password" type="password" placeholder="Password" /> <br />
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
