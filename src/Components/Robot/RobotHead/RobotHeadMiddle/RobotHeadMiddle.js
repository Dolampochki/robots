import React from 'react'
import './RobotHeadMiddle.scss'
// import PairPart from 'Components/Robot/RobotParts/PairPart'
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
            {/* <PairPart part='ear' side='left' partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} /> */}
            <SinglePart part='face' innerHtml={faceInnerHtml} />
            {/* <PairPart part='ear' side='right' partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} /> */}
        </div>
    )
}

export default RobotHeadMiddle