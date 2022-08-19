import React from 'react'
import './Buttons.scss'

export const Button = ({ number }) => {
    return (
        <div className={`button button-${number} parent-prop`}></div>
    )
}

export default Button