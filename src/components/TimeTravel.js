import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../constants'

export default function Launch(props) {

    const { data, setData } = props
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    today = yyyy + '-' + mm + '-' + dd

    function randomDate() {
        const randomYear = String(Math.floor(Math.random() * (1999 - 2020 + 1) + 2020))
        const randomMonth = String(Math.floor(Math.random() * (0 - 12 + 1) + 12))
        const randomDay = String(Math.floor(Math.random() * (0 - 29 + 1) + 29))
        return `${randomYear}-${randomMonth}-${randomDay}`
    }
    

    const [date, setDate] = useState(today)

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => `Error: ${err}`)
    }, [date])

    return (
        <div>
            <h1>NASA</h1>
            <button onClick={() => setDate(randomDate())}>Time Travel</button>
            <p>{data.date}</p>
            <h3>{data.title}</h3>
            <p>{data.explanation}</p>
            <img src={data.url} alt={data.title}></img>
        </div>
    )
}