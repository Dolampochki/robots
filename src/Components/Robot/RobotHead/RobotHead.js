import React from 'react'
import './RobotHead.scss'
import Antennas from './Antennas/Antennas'
import RobotHeadMiddle from './RobotHeadMiddle/RobotHeadMiddle'
import SinglePart from '../RobotParts/SinglePart'

export const RobotHead = () => {
    return (
        <div className='robot-head'>
            <Antennas />
            <RobotHeadMiddle />
            <SinglePart part='neck' />
        </div>
    )
}

export default RobotHead