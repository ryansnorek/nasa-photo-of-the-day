import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Menu from './components/Menu'

const API_KEY = 'bEEfm4HBhgVq80g2xiSdS5vK3hnVbQqJQeBOsID1'

function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err => console.log(`Error: ${err}`))
  }, [])

  return (
    <div className="App">
      <Menu data={nasaData}/>
    </div>
  );
}

export default App;
