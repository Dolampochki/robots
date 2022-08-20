import React from 'react'
import './RobotBody.scss'
import RobotBodyMiddle from './RobotBodyMiddle/RobotBodyMiddle'
import PairContainer from '../RobotParts/PairContainer'

export const RobotBody = () => {

    const handInnerHtml = <>
        <div className='hand-top'></div>
        <div className='hand-bottom'></div>
        <div className='hand-palm'></div>
    </>

    return (
        <div className='robot-body'>
            <PairContainer part='hand' innerHtml={handInnerHtml} noContainer={true} parent={true} />
            <RobotBodyMiddle />
        </div>
    )
}

export default RobotBody