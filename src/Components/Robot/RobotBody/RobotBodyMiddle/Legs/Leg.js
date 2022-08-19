import React, { useState, useEffect } from 'react'
import './Legs.scss'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { isSameObject, generateClasses } from 'Helpers/helpers'

export const Leg = ({ side, partSettings, updatePartSettings }) => {
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

    const classes = generateClasses('leg', settings, side)

    return (
        <>
            <div className={`${classes} parent`} onClick={openSettings}>
                <div className='leg-top parent-prop'></div>
                <div className='leg-bottom parent-prop'></div>
                <div className='leg-sole parent-prop'></div>
            </div>
            <SettingsPopup 
                part='leg'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                elementWidth={elementWidth}
                settings={settings} />
        </>
    )
}

export default Leg