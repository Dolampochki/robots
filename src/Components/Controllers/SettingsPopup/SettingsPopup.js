
import React, { useState } from 'react'
import { capitalizeWord } from 'Helpers/helpers'
import './SettingsPopup.scss'
import { settingsOptions, settingsForParts, propsClasses } from 'Helpers/consts'
import SettingsRow from './SettingsRow/SettingsRow'

export const SettingsPopup = ({ updateSettings, part, isOpen, settings, side }) => {
    const [currentSettings, setCurrentSettings] = useState({ ...settings })

    const done = () => {
        updateSettings(currentSettings)
    }

    const settingsPopupElementId = `settings-popup-${part}${side ? '-' + side : ''}`

    const settingsPopupElement = document.getElementById(settingsPopupElementId)

    const targetElement = settingsPopupElement?.previousSibling

    const targetElementCoords = targetElement ? targetElement.getBoundingClientRect() : { top: 0, left: 0, width: 0 }

    const style = { left: `${targetElementCoords.left + targetElementCoords.width / 2  - 162}px`, top: `${targetElementCoords.top}px` }

    return (
        <div id={settingsPopupElementId} className={`settings-popup ${isOpen ? 'show' : ''}`} style={style}>
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