import React, { useState } from 'react'
import './Torso.scss'
import Monitor from './Monitor/Monitor'
import Buttons from './Buttons/Buttons'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { generateClasses } from 'Helpers/helpers'
import { defaultSettings } from 'Helpers/consts'

export const Torso = () => {


    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [elementWidth, setElementWidth] = useState({})
    const [settings, setSettings] = useState({ ...defaultSettings })

    const updateSettings = (updatedSettings) => {
        setSettings(updatedSettings)
        setIsOpenSettings(false)
    }

    const openSettings = (e) => {
        if (![ ...e.target.classList ].includes('torso')) return
        setElementWidth(e.target.offsetWidth)
        setIsOpenSettings(true)
    }

    const classes = generateClasses('torso', settings)

    return (
        <>
            <div className={classes} onClick={openSettings}>
                <Monitor />
                <Buttons />
            </div>
            <SettingsPopup 
                part='torso'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                elementWidth={elementWidth}
                settings={settings} />
        </>
    )
}

export default Torso