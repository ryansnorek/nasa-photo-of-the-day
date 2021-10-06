import React from 'react'

export default function Launch(props) {

    const { data } = props

    return (
        <div>
            <h1>NASA</h1>
            <button>Launch</button>
            <p>{data.date}</p>
            <h3>{data.title}</h3>
            <p>{data.explanation}</p>
            <img src={data.url} alt={data.title}></img>
        </div>
    )
}