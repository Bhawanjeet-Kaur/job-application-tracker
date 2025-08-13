import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/theWall.jpeg';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1> Bluvera Tracker </h1>
        <p> Simple. Neat. Always on track.</p>
      </div>
      <div className="buttonContainer">
        <Link to="/Create">
          <button className="createButton"> Create</button>
        </Link>
        <Link to="/View">
          <button className="viewButton"> View</button>
        </Link>
        <Link to="/Update">
          <button className="updateButton"> Update</button>
        </Link>
        <Link to="/Download">
          <button className="downloadButton"> Download</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
