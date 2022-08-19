import React from 'react'
import './Ear.scss'

export const Ear = ({ side }) => {
    return (
        <div className={`ear ${side}`}></div>
    )
}

export default Ear