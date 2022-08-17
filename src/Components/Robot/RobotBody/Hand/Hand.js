import React from 'react'
import './Hand.scss'

export const Hand = ({ side }) => {
    return (
        <div className={`hand ${side}`}>
            <div className='hand-top'></div>
            <div className='hand-bottom'></div>
            <div className='hand-palm'></div>
        </div>
    )
}

export default Hand