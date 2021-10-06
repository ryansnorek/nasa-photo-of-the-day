import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import TimeTravel from './components/TimeTravel'
import { API_KEY } from './constants'

function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        // console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err => console.log(`Error: ${err}`))
  }, [])

  return (
    <div className="App">
      <TimeTravel data={nasaData} setData={setNasaData}/>
    </div>
  );
}

export default App;
