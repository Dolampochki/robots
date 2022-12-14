import React, { useState, useEffect } from 'react'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { generateClasses, isSameObject } from 'Helpers/helpers'
import { partsSettings, parentParts } from 'Helpers/consts'

export const Part = ({ 
    part, 
    side, 
    innerHtml, 
    pairSettings, 
    updatePartSettings,
    number = 0
}) => {

    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [settings, setSettings] = useState(pairSettings ? { ...pairSettings } : { ...partsSettings[part] })

    const openSettings = (e) => {
        let classList = [ ...e.target.classList ]
        if (parentParts.includes(part)) classList = [ ...classList, ...e.target.parentNode.classList ]
        if (!classList.includes(part)) return
        setIsOpenSettings(true)
    }

    const updateSettings = (updatedSettings) => {
        if (!isSameObject(updatedSettings, settings)) {
            pairSettings ? updatePartSettings(updatedSettings) : setSettings(updatedSettings)
        }
        setIsOpenSettings(false)
    }

    useEffect(() => {
        if (!pairSettings) return
        if (!isSameObject(pairSettings, settings)) setSettings(pairSettings)
    }, [pairSettings])
    
    const classes = generateClasses(part, settings, side)

    return (
        <>
            <div className={classes} onClick={openSettings}>{innerHtml}</div>
            <SettingsPopup 
                part={part}
                side={side}
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                settings={settings}
                number={number} />
        </>
    )
}

export default Part