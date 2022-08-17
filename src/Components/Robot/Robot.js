import React from 'react'
import './Robot.scss'
import RobotBody from './RobotBody/RobotBody'
import RobotHead from './RobotHead/RobotHead'

export const Robot = () => {
    return (
        <div className='robot-container'>
            <div className='robot'>
                <RobotHead />
                <RobotBody />
            </div>
        </div>
    )
}

export default Robot