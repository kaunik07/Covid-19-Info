import React from 'react';
import {Link } from 'react-router-dom';
import './Home.css';
import logo from './coronavirus.png';

function Home(){
  return (
    <div className="w3-black">
      <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
      <Link to="/Home" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i class="fa fa-home w3-xxlarge"></i>
        <p>HOME</p>
      </Link>
      <Link to="/News" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i class="fa fa-newspaper-o w3-xxlarge"></i>
        <p>NEWS</p>
      </Link>
      <Link to="/CoronaTracker" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i class="fa fa-globe w3-xxlarge"></i>
        <p>TRACKER</p>
      </Link>
    </nav>

    <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
      <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
        <Link to="/Home" class="w3-bar-item w3-button" style={{width:"15%" }}>HOME</Link>
        <Link to="/News" class="w3-bar-item w3-button" style={{width:"15%" }}>NEWS</Link>
        <Link to="/CoronaTracker" class="w3-bar-item w3-button" style={{width:"15%" }}>TRACKER</Link>
      </div>
    </div>

    <div class="w3-padding-large" id="main">
        <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
          <h1 class="w3-jumbo"><span class="w3-hide-small">Covid-19 </span>Info</h1>
          <h3>Stay home!! Stay Safe!!</h3>
          <img src={logo} alt="logo" class="w3-image" width="350" height="250"/>
        </header>
        <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
          <iframe className="responsiveIframe" src="https://app.developer.here.com/coronavirus/" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Home;



