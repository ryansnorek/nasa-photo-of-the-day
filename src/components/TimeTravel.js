import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, todaysDate } from '../constants'

export default function TimeTravel(props) {
    const { randomDate } = props

    const [date, setDate] = useState(todaysDate)
    const [nasaData, setNasaData] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
            .then(res => {
                setNasaData(res.data)
                console.log(res.data)
            })
            .catch(err => `Error: ${err}`)
    }, [date])

    return (
        <div>
            <h1>NASA</h1>
            <h4 className='date'>{nasaData.date}</h4>
            <button onClick={() => setDate(randomDate())}>Time Travel</button>
            <h4>{nasaData.title}</h4>
            <img src={nasaData.url} alt={nasaData.title}></img>
            <p>{nasaData.explanation}</p>
        </div>
    )
}