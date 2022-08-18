import React, { useState } from 'react'
import './Robots.scss'
import Robot from './Robot/Robot'
import RobotsCountController from './Controllers/RobotsCountController/RobotsCountController'

export const Robots = () => {
    const [count, setCount] = useState(1)
    const robotsList = [...Array(count).keys()]
    const updateCount = (newCount) => {
        setCount(newCount)
    }
    return (
        <div className='container'>
            <RobotsCountController updateCount={updateCount} />
            <div className='robots-container'>
                {robotsList.map(number => <Robot key={number} />)}
            </div>
        </div>
    )
}

export default Robots