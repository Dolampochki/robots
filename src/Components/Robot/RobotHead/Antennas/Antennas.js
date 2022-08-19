import React, { useState } from 'react'
import './Antennas.scss'
import Antenna from './Antenna'
import { defaultSettings } from 'Helpers/consts'

export const Antennas = () => {

    const [partSettings, setPartSettings] = useState({ ...defaultSettings, borderRadius: true })
    
    return (
        <div className='antennas'>
            {['left', 'right'].map(side => 
                <Antenna 
                    side={side} 
                    key={side} 
                    partSettings={partSettings} 
                    updatePartSettings={(e) => setPartSettings(e)} />
            )}
        </div>
    )
}

export default Antennas