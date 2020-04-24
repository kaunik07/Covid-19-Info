import React from 'react';
import {Link } from 'react-router-dom';
import logo from './coronavirus.png';
// import { Grommet, Box, Button, Grid, Text } from "grommet";
import './Home.css';

function Home(){
  return (
    <div className="home">
      <header className="home-header">
       <h1>C<img src={logo} className="home-logo" alt="logo" />VID-19</h1>
        <Link className='home-link' to="/CoronaTracker">Covid-19 Tracker</Link>
        <Link className='home-link' to="/News">Covid-19 News</Link>
      </header>
    </div>
  )
}

export default Home;
