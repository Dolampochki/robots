import React, { useState } from 'react'
import SinglePart from 'Components/Robot/RobotParts/SinglePart'
import { defaultSettings } from 'Helpers/consts'

export const PairContainer = ({ part, additionalSettings = {}, innerHtml, noContainer, parent = false, number }) => {

    const [partSettings, setPartSettings] = useState({ ...defaultSettings, ...additionalSettings })

    const pair = <>{['left', 'right'].map(side => 
        <SinglePart 
            part={part}
            side={side} 
            key={side} 
            innerHtml={innerHtml}
            partSettings={partSettings} 
            parent={parent}
            updatePartSettings={(e) => setPartSettings(e)}
            number={ number } />
    )}</>

    return (
        noContainer ? pair : <div className={`${part}s`}>{pair}</div>
    )
}

export default PairContainer