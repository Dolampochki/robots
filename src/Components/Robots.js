import React, { useState } from 'react'
import './Robots.scss'
import Robot from './Robot/Robot'
import RobotsCountController from './Controllers/RobotsCountController/RobotsCountController'

export const Robots = () => {

    const [count, setCount] = useState(1)
    const [dance, setDance] = useState(false)
    const robotsList = [...Array(count).keys()]

    return (
        <div className='container'>
            <RobotsCountController updateCount={setCount} updateDance={setDance} />
            <div className={`robots-container ${dance ? 'dance' : ''}`}>
                {robotsList.map(number => <Robot key={number} number={number} />)}
            </div>
        </div>
    )
}

export default Robots