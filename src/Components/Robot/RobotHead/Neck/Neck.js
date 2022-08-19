import React, { useState } from 'react'
import './Neck.scss'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { generateClasses } from 'Helpers/helpers'
import { defaultSettings } from 'Helpers/consts'

export const Neck = () => {

    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [elementWidth, setElementWidth] = useState({})
    const [settings, setSettings] = useState({ ...defaultSettings })

    const updateSettings = (updatedSettings) => {
        setSettings(updatedSettings)
        setIsOpenSettings(false)
    }

    const openSettings = (e) => {
        setElementWidth(e.target.offsetWidth)
        setIsOpenSettings(true)
    }

    const classes = generateClasses('neck', settings)

    return (
        <>
            <div className={classes} onClick={openSettings}></div>
            <SettingsPopup 
                part='neck'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                elementWidth={elementWidth}
                settings={settings} />
        </>
    )
}

export default Neck