import React from 'react'
import './Legs.scss'
import Leg from './Leg'

export const Legs = () => {
    return (
        <div className='legs'>
            {['left', 'right'].map(side => <Leg side={side} key={side} />)}
        </div>
    )
}

export default Legs