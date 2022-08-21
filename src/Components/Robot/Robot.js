import React from 'react'
import './Robot.scss'
import Part from './RobotParts/Part'
import Pair from './RobotParts/Pair'

export const Robot = ({ number }) => {

    const buttonsInnerHtml = <>
        {[...Array(3).keys()].map(num =>  <div className='button' key={num}></div>)}
    </>

    const partsInnerHtml = {
        face:  <>
            <Pair part='eye' number={number} />
            <Part part='mouth' number={number} />
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
            <Part part='monitor' number={number} />
            <Part part='buttons' innerHtml={buttonsInnerHtml} parent={true} number={number} />
        </>

    }

    return (
        <div className={`robot-container number-${number}`}>
            <div className='robot'>

                <div className='robot-head'>

                    <Pair part='antenna' number={number} />

                    <div className='robot-head-middle'>
                        <Pair part='ear' noContainer={true} number={number} />
                        <Part part='face' innerHtml={partsInnerHtml.face} number={number} />
                    </div>

                    <Part part='neck' number={number} />
                </div>
                <div className='robot-body'>

                    <Pair part='hand' innerHtml={partsInnerHtml.hand} noContainer={true} parent={true} number={number} />
                    
                    <div className='robot-body-middle'>
                        <Part part='torso' innerHtml={partsInnerHtml.torso} number={number} />
                        <Pair part='leg' innerHtml={partsInnerHtml.leg} parent={true} number={number}  />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Robot