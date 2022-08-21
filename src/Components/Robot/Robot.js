import React from 'react'
import './Robot.scss'
import SinglePart from './RobotParts/SinglePart'
import PairContainer from './RobotParts/PairContainer'

export const Robot = ({ number }) => {

    const buttonsInnerHtml = <>
        {[...Array(3).keys()].map(num =>  <div className='button' key={num}></div>)}
    </>

    const partsInnerHtml = {
        face:  <>
            <PairContainer part='eye' number={number} />
            <SinglePart part='mouth' number={number} />
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
            <SinglePart part='monitor' number={ number } />
            <SinglePart part='buttons' innerHtml={buttonsInnerHtml} parent={true} number={ number } />
        </>

    }

    return (
        <div className={`robot-container number-${number}`}>
            <div className='robot'>

                <div className='robot-head'>

                    <PairContainer part='antenna' number={number} />

                    <div className='robot-head-middle'>
                        <PairContainer part='ear' noContainer={true} number={number} />
                        <SinglePart part='face' innerHtml={partsInnerHtml.face} number={number} />
                    </div>

                    <SinglePart part='neck' number={number} />
                </div>
                <div className='robot-body'>

                    <PairContainer part='hand' innerHtml={partsInnerHtml.hand} noContainer={true} parent={true} number={number} />
                    
                    <div className='robot-body-middle'>
                        <SinglePart part='torso' innerHtml={partsInnerHtml.torso} number={ number } />
                        <PairContainer part='leg' innerHtml={partsInnerHtml.leg} parent={true} number={ number }  />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Robot