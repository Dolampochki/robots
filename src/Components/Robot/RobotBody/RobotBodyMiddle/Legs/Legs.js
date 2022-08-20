import React, { useState } from 'react'
import './Legs.scss'
import PairPart from 'Components/Robot/RobotParts/PairPart'
import { defaultSettings } from 'Helpers/consts'

export const Legs = () => {
    const [partSettings, setPartSettings] = useState({ ...defaultSettings })

    const legInnerHtml = <>
        <div className='leg-top'></div>
        <div className='leg-bottom'></div>
        <div className='leg-sole'></div>
    </>

    return (
        <div className='legs'>
            {['left', 'right'].map(side =>
                <PairPart 
                    part='leg'
                    side={side} 
                    key={side} 
                    innerHtml={legInnerHtml}
                    partSettings={partSettings} 
                    updatePartSettings={(e) => setPartSettings(e)} />
            )}
        </div>
    )
}

export default Legs