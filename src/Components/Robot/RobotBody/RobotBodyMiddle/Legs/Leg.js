import React from 'react'
import './Legs.scss'

export const Leg = ({ side }) => {
    return (
        <div className={`leg ${side}`}>
            <div className='leg-top'></div>
            <div className='leg-bottom'></div>
            <div className='leg-sole'></div>
        </div>
    )
}

export default Leg