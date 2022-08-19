import React, { useState } from 'react'
import './Mouth.scss'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { generateClasses } from 'Helpers/helpers'
import { defaultSettings } from 'Helpers/consts'


export const Mouth = () => {

    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [elementWidth, setElementWidth] = useState({})
    const [settings, setSettings] = useState({ ...defaultSettings, backgroundColor: 'background-light-grey' })

    const updateSettings = (updatedSettings) => {
        setSettings(updatedSettings)
        setIsOpenSettings(false)
    }

    const openSettings = (e) => {
        setElementWidth(e.target.offsetWidth)
        setIsOpenSettings(true)
    }

    const classes = generateClasses('mouth', settings)

    return (
        
        <>
            <div className={classes} onClick={openSettings}></div>
            <SettingsPopup 
                part='mouth'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                elementWidth={elementWidth}
                settings={settings} />
        </>
    )
}

export default Mouth