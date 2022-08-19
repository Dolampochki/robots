import React, { useState } from 'react'
import './Eyes.scss'
import Eye from './Eye'
import { defaultSettings } from 'Helpers/consts'

export const Eyes = () => {
    const [partSettings, setPartSettings] = useState({ ...defaultSettings, borderRadius: true, backgroundColor: 'background-light-grey' })
    return (
        <div className='eyes'>
            {['left', 'right'].map(side => 
                <Eye 
                    side={side} 
                    key={side}
                    partSettings={partSettings} 
                    updatePartSettings={(e) => setPartSettings(e)} />
            )}
        </div>
    )
}

export default Eyes