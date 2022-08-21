import React, { useState } from 'react'
import Part from 'Components/Robot/RobotParts/Part'
import { partsSettings } from 'Helpers/consts'

export const Pair = ({ part, innerHtml, noContainer, parent = false, number }) => {

    const [pairSettings, setPairSettings] = useState({ ...partsSettings[part].defaultSettings })

    const pair = <>
        {['left', 'right'].map(side => 
            <Part 
                part={part}
                side={side} 
                key={side} 
                innerHtml={innerHtml}
                pairSettings={pairSettings} 
                parent={parent}
                updatePartSettings={(e) => setPairSettings(e)}
                number={number} />
        )}
    </>

    return (
        noContainer ? pair : <div className={`${part}s`}>{pair}</div>
    )
}

export default Pair