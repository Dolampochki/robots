import React from 'react'
import './SettingsRow.scss'

export const SettingsRow = ({ options, updateProp, value }) => {

    const changeProp = (val) => {
        updateProp(val)
    }

    return (
        <div className='settings-row'>
            {options.map(option => <input 
                type='radio' 
                name='options' 
                onChange={changeProp} 
                className={`${option}`} 
                value={value}
                key={option} />)}
        </div>
    )
}

export default SettingsRow