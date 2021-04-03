import React from "react";
import { Link } from "react-router-dom"

import Layout from "../../components/shared/Layout/Layout";

import "./Home.css";

const Home = (props) => {
  return (
    <>
      <div className="home">
        <h1 className="logo">technologic</h1>
        <Link to="/products">
          <div className="home-products">products</div>
        </Link>
        <Link to="/sign-in">
          sign-in
        </Link>
        <Link to="/sign-up">
          sign-up
        </Link>
      </div>
    </>
  );
};

export default Home;
