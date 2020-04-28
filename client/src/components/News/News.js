import React, { Component } from 'react';
import './News.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';
import news from './images/news.png';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
