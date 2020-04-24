import React from 'react';
import {Link } from 'react-router-dom';
import logo from './coronavirus.png';
import './Home.css';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse: '',
    }
  }

  callAPi(){
    fetch("/testAPI")
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        apiResponse: res.message
      });
    });
  }

  componentDidMount(){
    return this.callAPi();
  }
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <Link className='home-link' to="/CoronaTracker">Covid-19 Tracker</Link>
        </header>
      </div>
    );
  }
}

export default Home;
