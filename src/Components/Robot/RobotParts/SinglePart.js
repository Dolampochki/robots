import React, { useState, useEffect } from 'react'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { generateClasses, isSameObject } from 'Helpers/helpers'
import { settingsForParts } from 'Helpers/consts'

export const SinglePart = ({ 
    part, 
    side, 
    innerHtml, 
    pairSettings, 
    updatePartSettings,
    parent = false,
    number = 0
}) => {

    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const currentPartSetting = pairSettings ? { ...pairSettings } : { ...settingsForParts[part].defaultSettings }
    const [settings, setSettings] = useState({ ...currentPartSetting })

    const openSettings = (e) => {
        let classList = [ ...e.target.classList ]
        if (parent) classList = [ ...classList, ...e.target.parentNode.classList ]
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
    
    const classes = `${generateClasses(part, settings, side)} ${parent ? 'parent' : ''}`

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

export default SinglePart