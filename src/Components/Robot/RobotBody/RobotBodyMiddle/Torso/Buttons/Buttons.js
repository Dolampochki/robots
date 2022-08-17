import React from 'react'
import './Buttons.scss'
import Button from './Button'

export const Buttons = ({ buttonsCount = 3 }) => {
    const buttonsList = [...Array(buttonsCount).keys()]
    return (
        <div className='buttons'>
            {buttonsList.map(number => <Button number={number} key={number} />)}
        </div>
    )
}

export default Buttons