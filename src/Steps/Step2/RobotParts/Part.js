import React from 'react'

export const Part = ({ 
    part, 
    side, 
    innerHtml
}) => {
    return (
        <div className={`${part} ${side ? side : ''}`}>{innerHtml}</div>
    )
}

export default Part