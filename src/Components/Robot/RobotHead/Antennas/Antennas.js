import React from 'react'
import './Antennas.scss'
import Antenna from './Antenna'

export const Antennas = () => {
    return (
        <div className='antennas'>
            {['left', 'right'].map(side => <Antenna side={side} key={side} />)}
        </div>
    )
}

export default Antennas