import React from 'react'
import './RobotHead.scss'
import Antennas from './Antennas/Antennas'
import RobotHeadMiddle from './RobotHeadMiddle/RobotHeadMiddle'

export const RobotHead = () => {
    return (
        <div className='robot-head'>
            <Antennas />
            <RobotHeadMiddle />
        </div>
    )
}

export default RobotHead