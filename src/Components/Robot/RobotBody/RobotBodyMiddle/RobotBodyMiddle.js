import React from 'react'
import './RobotBodyMiddle.scss'
import PairContainer from 'Components/Robot/RobotParts/PairContainer'
import SinglePart from 'Components/Robot/RobotParts/SinglePart'

export const RobotBodyMiddle = ({ number }) => {

    const legInnerHtml = <>
        <div className='leg-top'></div>
        <div className='leg-bottom'></div>
        <div className='leg-sole'></div>
    </>

    const buttonsList = [...Array(3).keys()]
    const buttonsInnerHtml = <>
        {buttonsList.map(num =>  <div className='button' key={num}></div>)}
    </>

    const torsoInnerHtml = <>
        <SinglePart part='monitor' number={ number } />
        <SinglePart part='buttons' innerHtml={buttonsInnerHtml} parent={true} number={ number } />
    </>

    return (
        <div className='robot-body-middle'>
            <SinglePart part='torso' innerHtml={torsoInnerHtml} number={ number } />
            <PairContainer part='leg' innerHtml={legInnerHtml} parent={true} number={ number }  />
        </div>
    )
}

export default RobotBodyMiddle