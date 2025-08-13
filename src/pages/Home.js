import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/theWall.jpeg';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div 
        className="headerContainer" 
        style={{ backgroundImage: `url(${BannerImage})`}}
      >
        <h1> Bluvera Tracker </h1>
        <p> Simple. Neat. Always on track.</p>
        <Link to="/Create">
          <button> Create</button>
        </Link>
        <Link to="/View">
          <button> View</button>
        </Link>
        <Link to="/Update">
          <button> Update</button>
        </Link>
        <Link to="/Download">
          <button> Download</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
