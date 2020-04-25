import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import logo from './coronavirus.png';
import { Box,Grid,Select } from "grommet";
// import { fetchCountries } from '../CoronaTracker/api';
import styles from './Home.module.css';

const items = [
  { label: "Home", href: "/" },
  { label: "News", href: "/News" },
  { label: "Tracker", href: "/CoronaTracker" },
];


function Home(){
  const [value, setValue] = React.useState('medium');
  // const [countries, setCountries] = useState([]);
  // const [country ,setCountry] = useState();

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setCountries(await fetchCountries());
  //   };

  //   fetchAPI();
  // }, []);

  // handleCountryChange = async (country) => {
  //   const data = await fetchData(country);
  //   this.setState({ data, country: country });
  // }

  return (
    <Grid className={styles.home}
      areas={[
        { name: 'title', start:[0, 0], end: [3,0] },
        { name: 'nav', start: [0, 1], end: [3, 1] },
        { name: 'news', start: [0, 2], end: [2, 2] },
        { name: 'tracker', start: [3, 2], end: [3, 2] },
      ]}
      columns={['auto', 'auto', 'auto','medium']}
      rows={['small','xsmall', 'small']}
      gap='small'
      responsive='true'
    >
      <Box gridArea='title' className={styles.title}>
        <h1 className={styles.title_header}>C<img src={logo} className={styles.logo} alt="coronavirus"/>VID-19</h1>
      </Box>
      <Box gridArea='nav' className={styles.nav}>
        <ul>
          {items.map(item => (
            <li><Link className={styles.navlinks} to={item.href}>{item.label}</Link></li>
          ))}
        </ul>
      </Box>
      <Box gridArea='news' className={styles.news}/>
      <Box gridArea='tracker' className={styles.tracker}>
        <h2>Worldwide Coronavirus</h2>
        <Select
          alignSelf="center"
          options={['small', 'medium', 'large']}
          value={value}
          onChange={({ option }) => setValue(option)}
      />
        {/* <Select
          onOpen={(e) => handleCountryChange(e.target.value)}
          options={}
          value={value}
          onChange={({ option }) => setCountries(option)}
      /> */}
      </Box>
    </Grid>
    
  )
}

export default Home;