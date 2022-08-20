import React, { useState } from 'react'
import './Eyes.scss'
import PairPart from 'Components/Robot/RobotParts/PairPart'
import { defaultSettings, additionalSettingsLighter, additionalSettingsBorderRadius } from 'Helpers/consts'

export const Eyes = () => {
    const [partSettings, setPartSettings] = useState({ ...defaultSettings, ...additionalSettingsBorderRadius, ...additionalSettingsLighter })
    return (
        <div className='eyes'>
            {['left', 'right'].map(side => 
                <PairPart 
                    part='eye'
                    side={side} 
                    key={side}
                    partSettings={partSettings} 
                    updatePartSettings={(e) => setPartSettings(e)} />
            )}
        </div>
    )
}

export default Eyes