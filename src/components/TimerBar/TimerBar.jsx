/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useEffect } from 'react';
import './TimerBar.css';
import Bar from './Bar'

export default function TimerBar(props){

let helper = (props.time * 10);
const FULLLENGTH = 260; // px
const TSTEP = FULLLENGTH / (helper);

const [len, setLen] = useState( FULLLENGTH );
const [time, setTime] = useState(helper);

useEffect( () => {

    const interval = setInterval ( () => {
    setTime( time => time - 1 );
    setLen( len => len - TSTEP );
    helper--;
    if( helper <= 0 )
    {
        clearInterval ( interval );
        props.onTimeOut(); // lift up state to Active
    }
 }, 100);

}, []);

    return(
        <>
         { props.user?
             (
                <div className="TimerBar-main">
                    <img className='circle boxshaded largavatar' 
                         id="active-image"
                         src={props.user.avatar} 
                         alt='User' />
                    <p className="TimerBar-text textshaded">
                        {
                            time >= 0 ?
                            ( time /10 ).toFixed(1)
                            : 'Wait...'
                        } 
                    </p>
                    <Bar width={len} />
                </div>
             ) : null
         }
        </>
    );
}