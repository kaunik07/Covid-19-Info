import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import {Link } from 'react-router-dom';
import './CoronaTracker.css';
import image from './image.png';

class CoronaTracker extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    console.log(data)
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div>
        <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <Link to="/Home" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i class="fa fa-home w3-xxlarge" style={{color:"white"}}></i>
          <p>HOME</p>
        </Link>
        <Link to="/News" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i class="fa fa-newspaper-o w3-xxlarge" style={{color:"white"}}></i>
          <p>NEWS</p>
        </Link>
        <Link to="/CoronaTracker" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i class='fa fa-globe' style={{fontSize:"36px" , color:"white"}}></i>
          <p>TRACKER</p>
        </Link>
        </nav>

        <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
          <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <Link to="/" class="w3-bar-item w3-button" style={{width:"25%"}}>HOME</Link>
            <Link to="/News" class="w3-bar-item w3-button" style={{width:"25%" }}>NEWS</Link>
            <Link to="/CoronaTracker" class="w3-bar-item w3-button" style={{width:"25%" }}>TRACKER</Link>
          </div>
        </div>      
        <div className="container">
          <img className="image" src={image} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} /> 
        </div>
      </div>
    );
  }
}

export default CoronaTracker;