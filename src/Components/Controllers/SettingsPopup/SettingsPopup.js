
import React, { useState, useEffect } from 'react'
import { capitalizeWord } from 'Helpers/helpers'
import './SettingsPopup.scss'
import { settingsOptions, propsClasses } from 'Helpers/consts'
import SettingsRow from './SettingsRow/SettingsRow'
import { isSameObject, getPositionStyles } from 'Helpers/helpers'

export const SettingsPopup = ({ updateSettings, part, isOpen, settings, side, number }) => {
    const [currentSettings, setCurrentSettings] = useState({ ...settings })

    const done = () => {
        updateSettings(currentSettings)
    }
    
    const settingsPopupElementId = `settings-popup-${part}-${number}${side ? '-' + side : ''}`
    const settingsPopupElement = document.getElementById(settingsPopupElementId)

    const { popupStyle, direction, arrowStyle } = getPositionStyles(currentSettings, settingsPopupElement)
    
    useEffect(() => {
        if (!isSameObject(settings, currentSettings)) setCurrentSettings(settings)
    }, [settings])

    useEffect(() => {
        const docClickHandler = e => {
            const clickOnPart = e.target.closest(`.number-${number} .${part}${side ? '.' + side : ''}`)
            const clickOnSettingsPopup = e.target.closest(`#${settingsPopupElementId}`)
            const isDansing = e.target.closest('.dance')
            if ((!clickOnPart && !clickOnSettingsPopup) || isDansing) {
                done()
            }
        }

        document.addEventListener('click', docClickHandler, false)

        return () => {
            done()
            document.removeEventListener('click', docClickHandler, false)
        }
    }, [])

    return (
        <div id={settingsPopupElementId} className={`settings-popup ${direction} ${isOpen ? 'show' : ''}`} style={popupStyle}>
            {isOpen && <>
                <div className='settings-popup-arrow' style={arrowStyle}></div>
                <h2>{capitalizeWord(part)}</h2>
                {Object.keys(currentSettings).map(prop => 
                    <SettingsRow 
                        key={prop}
                        propClass={propsClasses[prop]}
                        options={settingsOptions[prop]} 
                        selected={currentSettings[prop]} 
                        updateProp={(val) => setCurrentSettings({ ...currentSettings, [prop]: val })} />
                )}
                <button className='done-button' onClick={done}>Done</button>
            </>}
        </div>
    )
}

export default SettingsPopup