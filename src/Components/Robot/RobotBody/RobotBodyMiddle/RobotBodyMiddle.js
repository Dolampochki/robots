import React from 'react'
import './RobotBodyMiddle.scss'
import Torso from './Torso/Torso'
import Legs from './Legs/Legs'

export const RobotBodyMiddle = () => {
    return (
        <div className='robot-body-middle'>
            <Torso />
            <Legs />
        </div>
    )
}

export default RobotBodyMiddle