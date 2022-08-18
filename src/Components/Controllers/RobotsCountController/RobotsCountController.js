import React, { useState } from 'react'
import './RobotsCountController.scss'

export const RobotsCountController = ({ updateCount }) => {

    const [count, setCount] = useState(1)

    const changeCount = (encrease) => {
        const newCount = encrease ? count + 1 : count - 1
        setCount(newCount)
        updateCount(newCount)
    }

    return (
        <div className='robots-count-controller'>
            <button className='round-button' disabled={count < 2}  onClick={() => changeCount(false)}><i>-</i></button>
            <button className='round-button' disabled={count > 5} onClick={() => changeCount(true)}><i>+</i></button>
        </div>
    )
}

export default RobotsCountController