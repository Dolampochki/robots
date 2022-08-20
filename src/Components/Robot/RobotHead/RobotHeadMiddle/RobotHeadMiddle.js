import React from 'react'
import './RobotHeadMiddle.scss'
import SinglePart from 'Components/Robot/RobotParts/SinglePart'
import PairContainer from 'Components/Robot/RobotParts/PairContainer'

export const RobotHeadMiddle = ({ number }) => {

    const faceInnerHtml = <>
        <PairContainer part='eye' number={number} />
        <SinglePart part='mouth' number={number} />
    </>

    return (
        <div className='robot-head-middle'>
            <PairContainer part='ear' noContainer={true} number={number} />
            <SinglePart part='face' innerHtml={faceInnerHtml} number={number} />
        </div>
    )
}

export default RobotHeadMiddle