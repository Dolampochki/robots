import React from 'react'
import './SettingsPopup.scss'

export const SettingsPopup = ({ updateSettings, name, elementWidth, isOpen }) => {

    const style = { left: `${elementWidth / 2 - 150}px` }

    const done = () => {
        updateSettings()
    }

    return (
        <div className={`settings-popup ${isOpen ? 'show' : ''}`} style={style}>
            <h2>{name}</h2>
            <button className='done-button' onClick={done}>Done</button>
        </div>
    )
}

export default SettingsPopup