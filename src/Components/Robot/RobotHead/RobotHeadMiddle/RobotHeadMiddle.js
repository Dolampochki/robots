import React, { useState } from 'react'
import './RobotHeadMiddle.scss'
import PairPart from 'Components/Robot/RobotParts/PairPart'
import Face from './Face/Face'
import { defaultSettings } from 'Helpers/consts'

export const RobotHeadMiddle = () => {
    const [partSettings, setPartSettings] = useState({ ...defaultSettings })
    return (
        <div className='robot-head-middle'>
            <PairPart part='ear' side='left' partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} />
            <Face />
            <PairPart part='ear' side='right' partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} />
        </div>
    )
}

export default RobotHeadMiddle