import React from 'react'
import './Robot.scss'
import Part from './RobotParts/Part'
import Pair from './RobotParts/Pair'

export const Robot = () => {

    const buttonsInnerHtml = <>
        {[...Array(3).keys()].map(num =>  <div className='button' key={num}></div>)}
    </>

    const partsInnerHtml = {
        face:  <>
            <Pair part='eye' />
            <Part part='mouth' />
        </>,
        hand: <>
            <div className='hand-top'></div>
            <div className='hand-bottom'></div>
            <div className='hand-palm'></div>
        </>,
        leg: <>
            <div className='leg-top'></div>
            <div className='leg-bottom'></div>
            <div className='leg-sole'></div>
        </>,
        torso: <>
            <Part part='monitor'/>
            <Part part='buttons' innerHtml={buttonsInnerHtml} />
        </>

    }

    return (
        <div className='robot'>

            <div className='robot-head'>

                <Pair part='antenna' />

                <div className='robot-head-middle'>
                    <Pair part='ear' noContainer={true} />
                    <Part part='face' innerHtml={partsInnerHtml.face} />
                </div>

                <Part part='neck' />
            </div>
            <div className='robot-body'>

                <Pair part='hand' innerHtml={partsInnerHtml.hand} noContainer={true} />
                
                <div className='robot-body-middle'>
                    <Part part='torso' innerHtml={partsInnerHtml.torso} />
                    <Pair part='leg' innerHtml={partsInnerHtml.leg}  />
                </div>

            </div>
        </div>
    )
}

export default Robot