import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homepage5.jpg";
import Footer from "./Footer";
//import Navbar from "./Navbar";
import "../styles/Home.css";

function Home() {

  return (
    <div>
      {" "}
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h2>Fly High </h2>
          <br />
          <p> Let your dreams fly.</p>
          <Link to="/login">
            <button > BOOK NOW </button>
          
          </Link>
        </div>
       
      </div>
     <Footer></Footer>
    </div>
  );
}


export default Home;
