import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY, todaysDate } from '../constants'
import styled from 'styled-components'

const StyledTimeTravel = styled.div`
    * {
        color: #4f4f4;
        font-family: sans-serif;
    }
`



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
            <StyledTimeTravel>
                <h1>NASA</h1>
                <button onClick={() => setDate(randomDate())}>Time Travel</button>
                <p>{nasaData.date}</p>
                <h3>{nasaData.title}</h3>
                <p>{nasaData.explanation}</p>
                <img src={nasaData.url} alt={nasaData.title}></img>
            </StyledTimeTravel>
        </div>
    )
}