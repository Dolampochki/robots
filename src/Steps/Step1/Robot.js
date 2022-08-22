import React from 'react'
import './Robot.scss'

export const Robot = () => {

    return (
        <div className='robot'>

            <div className='robot-head'>

                <div className='antennas'>
                    <div className='antenna left'></div>
                    <div className='antenna right'></div>
                </div>

                <div className='robot-head-middle'>

                    <div className='ear left'></div>
                    <div className='ear right'></div>

                    <div className='face'>
                        <div className='eyes'>
                            <div className='eye left'></div>
                            <div className='eye right'></div>
                        </div>
                        <div className='mouth'></div>
                    </div>

                </div>

                <div className='neck'></div>

            </div>
            <div className='robot-body'>

                <div className='hand left'>
                    <div className='hand-top'></div>
                    <div className='hand-bottom'></div>
                    <div className='hand-palm'></div>
                </div>

                <div className='hand right'>
                    <div className='hand-top'></div>
                    <div className='hand-bottom'></div>
                    <div className='hand-palm'></div>
                </div>
                
                <div className='robot-body-middle'>

                    <div className='torso'>

                        <div className='monitor'></div>

                        <div className='buttons'>
                            <div className='button'></div>
                            <div className='button'></div>
                            <div className='button'></div>
                        </div>
                        
                    </div>     

                    <div className='legs'>

                        <div className='leg left'>
                            <div className='leg-top'></div>
                            <div className='leg-bottom'></div>
                            <div className='leg-sole'></div>
                        </div>

                        <div className='leg right'>
                            <div className='leg-top'></div>
                            <div className='leg-bottom'></div>
                            <div className='leg-sole'></div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Robot