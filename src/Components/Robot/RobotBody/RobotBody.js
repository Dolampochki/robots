import React, { useState } from 'react'
import './RobotBody.scss'
import Hand from './Hand/Hand'
import RobotBodyMiddle from './RobotBodyMiddle/RobotBodyMiddle'
import { defaultSettings } from 'Helpers/consts'

export const RobotBody = () => {
    
    const [partSettings, setPartSettings] = useState({ ...defaultSettings })

    return (
        <div className='robot-body'>
            <Hand side='left' partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} />
            <RobotBodyMiddle />
            <Hand side='right' partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} />
        </div>
    )
}

export default RobotBody