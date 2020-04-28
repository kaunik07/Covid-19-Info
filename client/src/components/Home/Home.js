import React, { useState, useEffect, Component } from 'react';
import {Link } from 'react-router-dom';
import logo from './coronavirus.png';
import { Box,Grid,Select } from "grommet";
// import {fetchCountries , fetchData} from '../CoronaTracker/api'
import { fetchCountries, fetchData, fetchDailyData } from '../CoronaTracker/api';
import styles from './Home.module.css';

const items = [
  { label: "Home", href: "/" },
  { label: "News", href: "/News" },
  { label: "Tracker", href: "/CoronaTracker" },
];

function Home(){
  // const [value, setValue] = React.useState('medium');
  const [countries, setCountries] = useState([]);
  const [country ,setCountry] = useState('Global');
  const [dailyData, setDailyData] = useState(['0 ']);
  const [dataCountry, setData] = useState([]);

  // console.log(dailyData)

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
  };

  const fetchMyAPI = async () => {
    const initialDailyData = await fetchDailyData();
    setDailyData(initialDailyData);
  };

  const fetchAPI = async () => {
    setCountries(await fetchCountries());
  };

  useEffect(() => {
    fetchAPI();
  },[]);

  console.log(dataCountry)

  return (
    <Grid className={styles.home}
      areas={[
        { name: 'title', start:[0, 0], end: [3,0] },
        { name: 'nav', start: [0, 1], end: [3, 1] },
        { name: 'news', start: [0, 2], end: [2, 3] },
        { name: 'tracker', start: [3, 2], end: [3, 2] },
      ]}
      columns={['auto', 'auto', 'large','medium']}
      rows={['small','xsmall', 'small','auto']}
      gap='medium'
      responsive={true}
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
      <Box gridArea='news' className={styles.news}>
        <iframe classname={styles.hellotracker} height="1024" src="https://app.developer.here.com/coronavirus/" frameborder="0"></iframe>
      </Box>
      <Box gridArea='tracker' className={styles.tracker}>
        <h2>Worldwide Coronavirus</h2>
        <Select
          alignSelf="center"
          options={countries}
          value={country}
          closeOnChange={true}
          onChange={({ option }) => setCountry(option)}
          onClose={handleCountryChange}
        />
        {/* {dataCountry.length > 0 &&
          <h2>
            You have {dataCountry.length} unread messages.
          </h2>
        } */}
      </Box>
    </Grid>
  )
}
export default Home;