import React from 'react'
import './RobotHead.scss'
import RobotHeadMiddle from './RobotHeadMiddle/RobotHeadMiddle'
import SinglePart from '../RobotParts/SinglePart'
import PairContainer from '../RobotParts/PairContainer'
import { additionalSettingsBorderRadius } from 'Helpers/consts'

export const RobotHead = () => {
    return (
        <div className='robot-head'>
            <PairContainer part='antenna' additionalSettings={additionalSettingsBorderRadius} />
            <RobotHeadMiddle />
            <SinglePart part='neck' />
        </div>
    )
}

export default RobotHead