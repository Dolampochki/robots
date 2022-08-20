
import React, { useState, useEffect } from 'react'
import { capitalizeWord } from 'Helpers/helpers'
import './SettingsPopup.scss'
import { settingsOptions, settingsForParts, propsClasses, colors } from 'Helpers/consts'
import SettingsRow from './SettingsRow/SettingsRow'
import { isSameObject } from 'Helpers/helpers'

export const SettingsPopup = ({ updateSettings, part, isOpen, settings, side, number }) => {
    const [currentSettings, setCurrentSettings] = useState({ ...settings })

    const done = () => {
        updateSettings(currentSettings)
    }
    
    const settingsPopupElementId = `settings-popup-${part}-${number}${side ? '-' + side : ''}`
    const settingsPopupElement = document.getElementById(settingsPopupElementId)
    
    const getStyle = () => {
        const settingPopupWidth = colors.length * 56 + 32
        const settingPopupHeight = (settingsForParts[part] ? settingsForParts[part].length : 0) * 60 + 140
        const targetElement = settingsPopupElement?.previousSibling
        const targetElementCoords = targetElement ? targetElement.getBoundingClientRect() : { top: 0, left: 0, bottom: 0, width: 0 }
        let direction = 'bottom'
        const spacer = 40
        const arrowSpacer = 8

        const targetElementCenter = targetElementCoords.left + targetElementCoords.width / 2
        let left = targetElementCenter  - settingPopupWidth / 2
        let arrowLeft = 0
        if (left < spacer) {
            left = spacer
            arrowLeft = targetElementCenter - arrowSpacer
        }
        if (left + settingPopupWidth > window.innerWidth - spacer) {
            left = window.innerWidth - settingPopupWidth - spacer
            arrowLeft = targetElementCenter - arrowSpacer
        }

        let top = targetElementCoords.top + 24
        if (top + settingPopupHeight > window.innerHeight) {
            const targetBottomTop = targetElementCoords.bottom ? targetElementCoords.bottom - spacer - settingPopupHeight : 0
            top = window.innerHeight - settingPopupHeight - spacer
            if (targetBottomTop && targetBottomTop >= spacer) {
                top = targetBottomTop
                direction = 'top'
            } 
        }
        const popupStyle = { 
            left: `${left}px`, 
            top: `${top}px`, 
            width: `${settingPopupWidth}px`,
            height: `${settingPopupHeight}px` 
        }

        const arrowTop = direction === 'bottom' ? top - arrowSpacer : top + settingPopupHeight - arrowSpacer

        const arrowStyle = {
            top: `${arrowTop}px`
        }

        if (arrowLeft) arrowStyle.left = `${arrowLeft}px`

        return { popupStyle, direction, arrowStyle }
    }

    const { popupStyle, direction, arrowStyle } = getStyle()
    
    useEffect(() => {
        if (!isSameObject(settings, currentSettings)) setCurrentSettings(settings)
    }, [settings])

    useEffect(() => {
        const docClickHandler = e => {
            const clickOnPart = e.target.closest(`.number-${number} .${part}${side ? '.' + side : ''}`)
            const clickOnSettingsPopup = e.target.closest(`#${settingsPopupElementId}`)
            if (!clickOnPart && !clickOnSettingsPopup) {
                done()
            }
        }

        document.addEventListener('click', docClickHandler, false)

        return () => {
            done()
            document.removeEventListener('click', docClickHandler, false)
        }
    }, [])

    return (
        <div id={settingsPopupElementId} className={`settings-popup ${direction} ${isOpen ? 'show' : ''}`} style={popupStyle}>
            <div className='settings-popup-arrow' style={arrowStyle}></div>
            {isOpen && <>
                <h2>{capitalizeWord(part)}</h2>
                {settingsForParts[part].map(prop => 
                    <SettingsRow 
                        key={prop}
                        propClass={propsClasses[prop]}
                        options={settingsOptions[prop]} 
                        selected={currentSettings[prop]} 
                        updateProp={(val) => setCurrentSettings({ ...currentSettings, [prop]: val })} />
                )}
                <button className='done-button' onClick={done}>Done</button>
            </>}
        </div>
    )
}

export default SettingsPopup