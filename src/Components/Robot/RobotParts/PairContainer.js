import React, { useState } from 'react'
import SinglePart from 'Components/Robot/RobotParts/SinglePart'
import { partsSettings } from 'Helpers/consts'

export const PairContainer = ({ part, innerHtml, noContainer, parent = false, number }) => {

    const [pairSettings, setPairSettings] = useState({ ...partsSettings[part].defaultSettings })

    const pair = <>
        {['left', 'right'].map(side => 
            <SinglePart 
                part={part}
                side={side} 
                key={side} 
                innerHtml={innerHtml}
                pairSettings={pairSettings} 
                parent={parent}
                updatePartSettings={(e) => setPairSettings(e)}
                number={ number } />
        )}
    </>

    return (
        noContainer ? pair : <div className={`${part}s`}>{pair}</div>
    )
}

export default PairContainer