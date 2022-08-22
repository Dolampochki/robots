import React from 'react'
import Part from 'Components/Robot/RobotParts/Part'

export const Pair = ({ part, innerHtml, noContainer }) => {

    const pair = <>
        {['left', 'right'].map(side => 
            <Part 
                part={part}
                side={side} 
                key={side} 
                innerHtml={innerHtml} />
        )}
    </>

    return (
        noContainer ? pair : <div className={`${part}s`}>{pair}</div>
    )
}

export default Pair