import React, { useState, useEffect } from 'react'
import './Hand.scss'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { isSameObject, generateClasses } from 'Helpers/helpers'

export const Hand = ({ side, partSettings, updatePartSettings }) => {
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

    const classes = generateClasses('hand', settings, side)

    return (
        <>
            <div className={`${classes} parent`} onClick={openSettings}>
                <div className='hand-top parent-prop'></div>
                <div className='hand-bottom parent-prop'></div>
                <div className='hand-palm parent-prop'></div>
            </div>
            <SettingsPopup 
                part='hand'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                elementWidth={elementWidth}
                settings={settings} />
        </>
    )
}

export default Hand