import React, { useState } from 'react'
import './Robots.scss'
import Robot from './Robot/Robot'
import RobotsCountController from './Controllers/RobotsCountController/RobotsCountController'

export const Robots = () => {

    const [count, setCount] = useState(1)
    const [dance, setDance] = useState(false)
    const robotsList = [...Array(count).keys()]

    const updateCount = (newCount) => {
        setCount(newCount)
    }

    const updateDance = (newDance) => {
        setDance(newDance)
    }

    return (
        <div className='container'>
            <RobotsCountController updateCount={updateCount} updateDance={updateDance} />
            <div className={`robots-container ${dance ? 'dance' : ''}`}>
                {robotsList.map(number => <Robot key={number} />)}
            </div>
        </div>
    )
}

export default Robots