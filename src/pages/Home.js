import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import c from "../images/coffee.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${c})` }}>
        <div className="headerContainer">
          <h1 > Brook Haven Cafe</h1>
          <p>For Coffee Enthusiast</p>
          <Link to="/menu">
            <button> Click to ORDER NOW!</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
