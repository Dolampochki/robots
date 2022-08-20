import React, { useState } from 'react'
import './RobotBody.scss'
import PairPart from '../RobotParts/PairPart'
import RobotBodyMiddle from './RobotBodyMiddle/RobotBodyMiddle'
import { defaultSettings } from 'Helpers/consts'

export const RobotBody = () => {
    
    const [partSettings, setPartSettings] = useState({ ...defaultSettings })

    const handInnerHtml = <>
        <div className='hand-top'></div>
        <div className='hand-bottom'></div>
        <div className='hand-palm'></div>
    </>

    return (
        <div className='robot-body'>
            <PairPart part='hand' side='left' innerHtml={handInnerHtml} partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} />
            <RobotBodyMiddle />
            <PairPart part='hand' side='right' innerHtml={handInnerHtml} partSettings={partSettings} updatePartSettings={(e) => setPartSettings(e)} />
        </div>
    )
}

export default RobotBody