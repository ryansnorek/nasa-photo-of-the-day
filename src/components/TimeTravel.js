import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, todaysDate } from '../constants'

export default function Launch(props) {
    const { randomDate } = props

    const [date, setDate] = useState(todaysDate)
    const [nasaData, setNasaData] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
            .then(res => {
                setNasaData(res.data)
            })
            .catch(err => `Error: ${err}`)
    }, [date])

    return (
        <div>
            <h1>NASA</h1>
            <button onClick={() => setDate(randomDate())}>Time Travel</button>
            <p>{nasaData.date}</p>
            <h3>{nasaData.title}</h3>
            <p>{nasaData.explanation}</p>
            <img src={nasaData.url} alt={nasaData.title}></img>
        </div>
    )
}