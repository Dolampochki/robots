
import React, { useState, useEffect } from 'react'
import { capitalizeWord } from 'Helpers/helpers'
import './SettingsPopup.scss'
import { settingsOptions, settingsForParts, propsClasses } from 'Helpers/consts'
import SettingsRow from './SettingsRow/SettingsRow'
import { isSameObject } from 'Helpers/helpers'

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
    
    useEffect(() => {
        if (!isSameObject(settings, currentSettings)) setCurrentSettings(settings)
    }, [settings])

    useEffect(() => {
        const docClickHandler = e => {
            const clickOnPart = e.target.closest(`.${part}${side ? '.' + side : ''}`)
            const clickOnSettingsPopup = e.target.closest(`#${settingsPopupElementId}`)
            if (!clickOnPart && !clickOnSettingsPopup) {
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
        <div id={settingsPopupElementId} className={`settings-popup ${isOpen ? 'show' : ''}`} style={style}>
            {isOpen && <>
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
            </>}
        </div>
    )
}

export default SettingsPopup