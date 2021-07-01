import React, {useEffect, useState} from 'react';
import './App.css';
import Cards from './components/Cards';
import Chart from './components/Chart';
import CountrySelect from './components/CountrySelector';
import covidImg from "./components/covid.png";
import axios from 'axios';
import {countriesData, endpoint} from './components/endpoints';
function App() {
const initialState = {
    data: {},
    countryName: ''
}
  const [data, setData] = useState(initialState);
  
  useEffect(() => {
    async function fetchData() {
      data.countryName ? 
      await axios.get(`${countriesData}/${data.countryName}`)
      .then(response => {
        setData({...data, data: response.data})
      }) :
      await axios.get(endpoint)
      .then(response => {
        setData({...data, data: response.data})
      }) 
      
  }
    fetchData()
  }, [data.countryName])

  const handleCity = (cityName) => {
    return setData({...data, countryName: cityName})
  }


  return (
    <div className="wrapper">
      <img src={covidImg} className="covid-img" alt="covid-19 image"/>
      <Cards data={data.data}/>
      <CountrySelect handleCity={handleCity}/>
      <Chart data={data}/>
    </div>     
  );
}

export default App;
