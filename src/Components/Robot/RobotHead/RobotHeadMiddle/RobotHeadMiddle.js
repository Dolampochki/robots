import React, { useState } from 'react'
import './RobotHeadMiddle.scss'
import Ear from './Ear/Ear'
import Face from './Face/Face'
import { defaultSettings } from 'Helpers/consts'

export const RobotHeadMiddle = () => {
    const [partSettings, setPartSettings] = useState({ ...defaultSettings })
    return (
        <div className='robot-head-middle'>
            <Ear side='left' partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} />
            <Face />
            <Ear side='right' partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} />
        </div>
    )
}

export default RobotHeadMiddle