import React, { useState } from 'react'
import './Buttons.scss'
import Button from './Button'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { generateClasses } from 'Helpers/helpers'
import { defaultSettings } from 'Helpers/consts'

export const Buttons = ({ buttonsCount = 3 }) => {

    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [elementWidth, setElementWidth] = useState({})
    const [settings, setSettings] = useState({ 
        ...defaultSettings,
        backgroundColor: 'background-light-grey',
        borderRadius: true,
        distribute: 'horizontal'
    })
    const buttonsList = [...Array(buttonsCount).keys()]


    const updateSettings = (updatedSettings) => {
        setSettings(updatedSettings)
        setIsOpenSettings(false)
    }

    const openSettings = (e) => {
        setElementWidth(e.target.offsetWidth)
        setIsOpenSettings(true)
    }

    const classes = generateClasses('buttons', settings)

    return (
        <>
            <div className={`${classes} parent`} onClick={openSettings}>
                {buttonsList.map(number =>  <Button number={number} key={number} />)}
            </div>
            <SettingsPopup 
                part='buttons'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                elementWidth={elementWidth}
                settings={settings} />
        </>
    )
}

export default Buttons