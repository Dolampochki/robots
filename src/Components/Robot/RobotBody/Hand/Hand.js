import React, { useState, useEffect } from 'react'
import './Hand.scss'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { isSameObject, generateClasses } from 'Helpers/helpers'

export const Hand = ({ side, handSettings, updateHandSettings }) => {
    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [elementWidth, setElementWidth] = useState({})
    const [settings, setSettings] = useState({ ...handSettings })

    const updateSettings = (updatedSettings) => {
        updateHandSettings(updatedSettings)
        setIsOpenSettings(false)
    }

    const openSettings = (e) => {
        setElementWidth(e.target.offsetWidth)
        setIsOpenSettings(true)
    }

    useEffect(() => {
        if (!isSameObject(handSettings, settings)) setSettings(handSettings)
    }, [handSettings])

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