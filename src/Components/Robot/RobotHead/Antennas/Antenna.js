import React, { useState, useEffect } from 'react'
import './Antennas.scss'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { isSameObject, generateClasses } from 'Helpers/helpers'

export const Antenna = ({ side, partSettings, updatePartSettings }) => {

    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [elementWidth, setElementWidth] = useState({})
    const [settings, setSettings] = useState({ ...partSettings })

    const updateSettings = (updatedSettings) => {
        updatePartSettings(updatedSettings)
        setIsOpenSettings(false)
    }

    const openSettings = (e) => {
        setElementWidth(e.target.offsetWidth)
        setIsOpenSettings(true)
    }

    useEffect(() => {
        if (!isSameObject(partSettings, settings)) setSettings(partSettings)
    }, [partSettings])

    const classes = generateClasses('antenna', settings, side)

    return (
        <>
            <div className={classes} onClick={openSettings}></div>
            <SettingsPopup 
                part='antenna'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                elementWidth={elementWidth}
                settings={settings} />
        </>
    )
}

export default Antenna