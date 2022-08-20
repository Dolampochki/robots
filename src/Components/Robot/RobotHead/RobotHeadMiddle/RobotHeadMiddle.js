import React from 'react'
import './RobotHeadMiddle.scss'
import SinglePart from 'Components/Robot/RobotParts/SinglePart'
import PairContainer from 'Components/Robot/RobotParts/PairContainer'
import { additionalSettingsLighter, additionalSettingsBorderRadius } from 'Helpers/consts'

export const RobotHeadMiddle = () => {

    const faceInnerHtml = <>
        <PairContainer part='eye' additionalSettings={{ ...additionalSettingsLighter, ...additionalSettingsBorderRadius }} />
        <SinglePart part='mouth' additionalSettings={additionalSettingsLighter} />
    </>

    return (
        <div className='robot-head-middle'>
            <PairContainer part='ear' noContainer={true} />
            <SinglePart part='face' innerHtml={faceInnerHtml} />
        </div>
    )
}

export default RobotHeadMiddle