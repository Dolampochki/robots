import React from 'react'
import './Face.scss'
import Eyes from './Eyes/Eyes'
import Mouth from './Mouth/Mouth'

export const Face = () => {
    return (
        <div className='face'>
            <Eyes />
            <Mouth />
        </div>
    )
}

export default Face