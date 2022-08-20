import React from 'react'
import './Robot.scss'
import RobotBody from './RobotBody/RobotBody'
import RobotHead from './RobotHead/RobotHead'

export const Robot = ({ number }) => {
    return (
        <div className={`robot-container number-${number}`}>
            <div className='robot'>
                <RobotHead number={number} />
                <RobotBody number={number} />
            </div>
        </div>
    )
}

export default Robot