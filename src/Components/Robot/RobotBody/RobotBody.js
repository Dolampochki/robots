import React, { useState } from 'react'
import './RobotBody.scss'
import Hand from './Hand/Hand'
import RobotBodyMiddle from './RobotBodyMiddle/RobotBodyMiddle'
import { defaultSettings } from 'Helpers/consts'

export const RobotBody = () => {
    
    const [handSettings, setHandSettings] = useState({ ...defaultSettings })

    return (
        <div className='robot-body'>
            <Hand side='left' handSettings={handSettings} updateHandSettings={(e) => setHandSettings(e)} />
            <RobotBodyMiddle />
            <Hand side='right' handSettings={handSettings} updateHandSettings={(e) => setHandSettings(e)} />
        </div>
    )
}

export default RobotBody