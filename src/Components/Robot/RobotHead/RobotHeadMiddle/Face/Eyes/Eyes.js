import React from 'react'
import './Eyes.scss'
import Eye from './Eye'

export const Eyes = () => {
    return (
        <div className='eyes'>
            {['left', 'right'].map(side => <Eye side={side} key={side} />)}
        </div>
    )
}

export default Eyes