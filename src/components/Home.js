import React from "react";
import app from "../base";
import "./Home.css";

const Home = ({ name }) => {
  return (
    <div className="home__container">
      <h1>Welcome </h1>
      <span>{app.auth().currentUser.email}</span> <br />
      <br />
      <br />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
