import React from 'react'

export default function Menu(props) {

    const { data } = props

    return (
        <div>
            <h1>NASA</h1>
            <button>Launch</button>
            <h3>{data.title}</h3>
        </div>
    )
}
