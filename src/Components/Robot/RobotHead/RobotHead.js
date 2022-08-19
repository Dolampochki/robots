import React from 'react'
import './RobotHead.scss'
import Antennas from './Antennas/Antennas'
import RobotHeadMiddle from './RobotHeadMiddle/RobotHeadMiddle'
import Neck from './Neck/Neck'

export const RobotHead = () => {
    return (
        <div className='robot-head'>
            <Antennas />
            <RobotHeadMiddle />
            <Neck />
        </div>
    )
}

export default RobotHead