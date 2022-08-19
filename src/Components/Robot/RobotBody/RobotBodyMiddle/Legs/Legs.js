import React, { useState } from 'react'
import './Legs.scss'
import Leg from './Leg'
import { defaultSettings } from 'Helpers/consts'

export const Legs = () => {
    const [partSettings, setPartSettings] = useState({ ...defaultSettings })
    return (
        <div className='legs'>
            {['left', 'right'].map(side =>
                <Leg 
                    side={side} 
                    key={side} 
                    partSettings={partSettings} 
                    updatePartSettings={(e) => setPartSettings(e)} />
            )}
        </div>
    )
}

export default Legs