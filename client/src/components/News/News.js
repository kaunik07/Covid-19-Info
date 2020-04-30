import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import './News.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';
import news from './images/news.png';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
          <Link to="/Home" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-home w3-xxlarge" style={{color:"white"}}></i>
            <p>HOME</p>
          </Link>
          <Link to="/News" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-newspaper-o w3-xxlarge" style={{color:"white"}}></i>
            <p>NEWS</p>
          </Link>
          <Link to="/CoronaTracker" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-globe w3-xxlarge" style={{color:"white"}}></i>
            <p>TRACKER</p>
          </Link>
        </nav>
        <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <Link to="/" className="w3-bar-item w3-button" style={{width:"25%" }}>HOME</Link>
            <Link to="/News" className="w3-bar-item w3-button" style={{width:"25%" }}>NEWS</Link>
            <Link to="/CoronaTracker" className="w3-bar-item w3-button" style={{width:"25%" }}>TRACKER</Link>
          </div>
        </div>      
        <div className="app">
          <div className="appHeader">
            <img className="scriptLogo" src={news} alt="React Logo" />
            
            <div className="title">
              <h1>COVID-NEWS</h1>
            </div>
            <img className="scriptLogo" src={news} alt="Javascript Logo" />
          </div>
          <Search default="bbc-news" />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
