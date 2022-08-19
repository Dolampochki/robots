import React, { useState } from 'react'
import './Face.scss'
import Eyes from './Eyes/Eyes'
import Mouth from './Mouth/Mouth'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { generateClasses } from 'Helpers/helpers'
import { defaultSettings } from 'Helpers/consts'

export const Face = () => {

    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [elementWidth, setElementWidth] = useState({})
    const [settings, setSettings] = useState({ ...defaultSettings })

    const updateSettings = (updatedSettings) => {
        setSettings(updatedSettings)
        setIsOpenSettings(false)
    }

    const openSettings = (e) => {
        if (![ ...e.target.classList ].includes('face')) return
        setElementWidth(e.target.offsetWidth)
        setIsOpenSettings(true)
    }

    const classes = generateClasses('face', settings)


    return (
        <>
            <div className={classes} onClick={openSettings}>
                <Eyes />
                <Mouth />
            </div>
            <SettingsPopup 
                part='face'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                elementWidth={elementWidth}
                settings={settings} />
        </>

    )
}

export default Face