import React from 'react'
import './Torso.scss'
import Monitor from './Monitor/Monitor'
import Buttons from './Buttons/Buttons'

export const Torso = () => {
    return (
        <div className='torso'>
            <Monitor />
            <Buttons />
        </div>
    )
}

export default Torso