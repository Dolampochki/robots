import React, { useState } from 'react'
import './Antennas.scss'
import PairPart from 'Components/Robot/RobotParts/PairPart'
import { defaultSettings, additionalSettingsBorderRadius } from 'Helpers/consts'

export const Antennas = () => {

    const [partSettings, setPartSettings] = useState({ ...defaultSettings, ...additionalSettingsBorderRadius })
    
    return (
        <div className='antennas'>
            {['left', 'right'].map(side => 
                <PairPart 
                    part='antenna'
                    side={side} 
                    key={side} 
                    partSettings={partSettings} 
                    updatePartSettings={(e) => setPartSettings(e)} />
            )}
        </div>
    )
}

export default Antennas