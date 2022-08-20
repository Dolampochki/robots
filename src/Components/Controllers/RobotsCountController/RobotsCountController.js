import React, { useState } from 'react'
import './RobotsCountController.scss'

export const RobotsCountController = ({ updateCount, updateDance }) => {

    const [count, setCount] = useState(1)
    const [dance, setDance] = useState(false)

    const changeCount = (encrease) => {
        const newCount = encrease ? count + 1 : count - 1
        setCount(newCount)
        updateCount(newCount)
    }

    const toggleDance = () => {
        setDance(!dance)
        updateDance(!dance)
    }



    return (
        <div className='robots-count-controller'>
            <button className='round-button circle' disabled={count < 2}  onClick={() => changeCount(false)}><i>-</i></button>
            <button className='round-button circle' disabled={count > 5} onClick={() => changeCount(true)}><i>+</i></button>
            <button className={`round-button ${dance ? 'active' : ''}`} onClick={toggleDance}>Dance!</button>
        </div>
    )
}

export default RobotsCountController