import React from "react";
import { Link } from "react-router-dom"

import Layout from "../../components/shared/Layout/Layout";

import "./Home.css";

const Home = (props) => {
  return (
    <>
      <div className="home">
        <Link to="/">
          <h1 className="home-logo">technologic</h1>
        </Link>
        <Link to="/products">
          <div className="home-products">products</div>
        </Link>
        <Link to="/sign-in">
          <div className="home-sign-in">sign-in</div>
        </Link>
        <Link to="/sign-up">
          <div className="home-sign-up">sign-up</div>
        </Link>
      </div>
    </>
  );
};

export default Home;
