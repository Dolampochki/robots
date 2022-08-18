import React from 'react'
import './Ear.scss'

export const Ear = ({ side }) => {
    console.log('Ear')
    return (
        <div className={`ear ${side}`}></div>
    )
}

export default Ear