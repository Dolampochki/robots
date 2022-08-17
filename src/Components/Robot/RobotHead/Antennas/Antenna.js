import React from 'react'
import './Antennas.scss'

export const Antenna = ({ side }) => {
    return (
        <div className={`antenna ${side}`}>
        </div>
    )
}

export default Antenna