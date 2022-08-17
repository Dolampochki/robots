import React from 'react'
import './Buttons.scss'

export const Button = ({ number }) => {
    return (
        <div className={`button button-${number}`}></div>
    )
}

export default Button