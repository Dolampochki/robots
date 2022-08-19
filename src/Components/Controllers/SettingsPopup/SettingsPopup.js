
import React, { useState } from 'react'
import { capitalizeWord } from 'Helpers/helpers'
import './SettingsPopup.scss'
import { settingsOptions, settingsForParts, propsClasses } from 'Helpers/consts'
import SettingsRow from './SettingsRow/SettingsRow'

export const SettingsPopup = ({ updateSettings, part, elementWidth, isOpen, settings }) => {

    const style = { left: `${elementWidth / 2 - 157}px` }
    const [currentSettings, setCurrentSettings] = useState({ ...settings })

    const done = () => {
        updateSettings(currentSettings)
    }

    return (
        <div className={`settings-popup ${isOpen ? 'show' : ''}`} style={style}>
            <h2>{capitalizeWord(part)}</h2>
            {settingsForParts[part].map(prop => 
                <SettingsRow 
                    key={prop}
                    propClass={propsClasses[prop]}
                    options={settingsOptions[prop]} 
                    selected={currentSettings[prop]} 
                    updateProp={(val) => setCurrentSettings({ ...currentSettings, [prop]: val })} />
            )}
            <button className='done-button' onClick={done}>Done</button>
        </div>
    )
}

export default SettingsPopup