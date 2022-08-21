import React from 'react'
import './SettingsRow.scss'

export const SettingsRow = ({ options, propClass, updateProp, selected }) => {

    return (
        <ul className={`settings-row ${propClass}`}>
            {options.map(option => <li
                onClick={() => updateProp(option)} 
                className={`${typeof option === 'boolean' ? (option ? propClass : '') : option} ${option === selected ? 'selected' : ''}`} 
                key={option}></li>)}
        </ul>
    )
}

export default SettingsRow