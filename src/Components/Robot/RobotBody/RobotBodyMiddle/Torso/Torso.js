import React, { useState } from 'react'
import './Torso.scss'
import SinglePart from 'Components/Robot/RobotParts/SinglePart'
import SettingsPopup from 'Components/Controllers/SettingsPopup/SettingsPopup'
import { generateClasses } from 'Helpers/helpers'
import { defaultSettings, additionalSettingsLighter, additionalSettingsBorderRadius } from 'Helpers/consts'

export const Torso = () => {


    const [isOpenSettings, setIsOpenSettings] = useState(false)
    const [settings, setSettings] = useState({ ...defaultSettings })

    const updateSettings = (updatedSettings) => {
        setSettings(updatedSettings)
        setIsOpenSettings(false)
    }

    const openSettings = (e) => {
        if (![ ...e.target.classList ].includes('torso')) return
        setIsOpenSettings(true)
    }

    const classes = generateClasses('torso', settings)

    const buttonsList = [...Array(3).keys()]
    const buttonsInnerHtml = <>
        {buttonsList.map(number =>  <div className={`button button-${number}`} key={number}></div>)}
    </>

    return (
        <>
            <div className={classes} onClick={openSettings}>

                <SinglePart part='monitor' additionalSettings={additionalSettingsLighter} />
                <SinglePart part='buttons' innerHtml={buttonsInnerHtml} additionalSettings={{ ...additionalSettingsLighter, ...additionalSettingsBorderRadius }} />
            </div>
            <SettingsPopup 
                part='torso'
                isOpen={isOpenSettings}
                updateSettings={updateSettings}
                settings={settings} />
        </>
    )
}

export default Torso