import React from 'react'
import './RobotHeadMiddle.scss'
import Ear from './Face/Eyes/Eye'
import Face from './Face/Face'

export const RobotHeadMiddle = () => {
    return (
        <div className='robot-head-middle'>
            <Ear side='left' />
            <Face />
            <Ear side='right' />
        </div>
    )
}

export default RobotHeadMiddle