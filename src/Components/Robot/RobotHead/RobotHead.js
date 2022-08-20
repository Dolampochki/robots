import React from 'react'
import './RobotHead.scss'
import RobotHeadMiddle from './RobotHeadMiddle/RobotHeadMiddle'
import SinglePart from '../RobotParts/SinglePart'
import PairContainer from '../RobotParts/PairContainer'

export const RobotHead = ({ number }) => {
    return (
        <div className='robot-head'>
            <PairContainer part='antenna' number={number} />
            <RobotHeadMiddle number={number} />
            <SinglePart part='neck' number={number} />
        </div>
    )
}

export default RobotHead