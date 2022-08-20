import React from 'react'
import './RobotBodyMiddle.scss'
import PairContainer from 'Components/Robot/RobotParts/PairContainer'
import SinglePart from 'Components/Robot/RobotParts/SinglePart'
import { additionalSettingsBorderRadius, additionalSettingsLighter } from 'Helpers/consts'

export const RobotBodyMiddle = () => {

    const legInnerHtml = <>
        <div className='leg-top'></div>
        <div className='leg-bottom'></div>
        <div className='leg-sole'></div>
    </>

    const buttonsList = [...Array(3).keys()]
    const buttonsInnerHtml = <>
        {buttonsList.map(number =>  <div className='button' key={number}></div>)}
    </>

    const torsoInnerHtml = <>
        <SinglePart 
            part='monitor' 
            additionalSettings={additionalSettingsLighter} />
        <SinglePart 
            part='buttons' 
            innerHtml={buttonsInnerHtml} 
            additionalSettings={{ ...additionalSettingsLighter, ...additionalSettingsBorderRadius }}
            parent={true} />
    </>

    return (
        <div className='robot-body-middle'>
            <SinglePart part='torso' innerHtml={torsoInnerHtml} />
            <PairContainer part='leg' innerHtml={legInnerHtml} parent={true}  />
        </div>
    )
}

export default RobotBodyMiddle