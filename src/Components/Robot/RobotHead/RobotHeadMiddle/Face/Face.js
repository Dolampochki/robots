import React, { useState } from 'react'
import './Face.scss'
import Eyes from './Eyes/Eyes'
import SinglePart from 'Components/Robot/RobotParts/SinglePart'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { generateClasses } from 'Helpers/helpers'
import { defaultSettings, additionalSettingsLighter } from 'Helpers/consts'

export const Face = () => {

    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [settings, setSettings] = useState({ ...defaultSettings })

    const updateSettings = (updatedSettings) => {
        setSettings(updatedSettings)
        setIsOpenSettings(false)
    }

    const openSettings = (e) => {
        if (![ ...e.target.classList ].includes('face')) return
        setIsOpenSettings(true)
    }

    const classes = generateClasses('face', settings)

    return (
        <>
            <div className={classes} onClick={openSettings}>
                <Eyes />
                <SinglePart part='mouth' additionalSettings={additionalSettingsLighter} />
            </div>
            <SettingsPopup 
                part='face'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                settings={settings} />
        </>

    )
}

export default Face