import React, { useState, useEffect } from 'react'
import './Hand.scss'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { capitalizeWord, isSameObject } from 'Helpers/helpers'

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

    const classes = `hand ${side} ${settings.backgroundColor} ${settings.borderColor} ${settings.borderRadius ? 'radius' : ''}`

    return (
        <>
            <div className={classes} onClick={openSettings}>
                <div className='hand-top'></div>
                <div className='hand-bottom'></div>
                <div className='hand-palm'></div>
            </div>
            <SettingsPopup 
                name={ `${capitalizeWord(side)} hand` }
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                elementWidth={elementWidth} />
        </>
    )
}

export default Hand