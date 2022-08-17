import React from 'react'
import './RobotBody.scss'
import Hand from './Hand/Hand'
import RobotBodyMiddle from './RobotBodyMiddle/RobotBodyMiddle'

export const RobotBody = () => {
    return (
        <div className='robot-body'>
            <Hand side='left' />
            <RobotBodyMiddle />
            <Hand side='right' />
        </div>
    )
}

export default RobotBody