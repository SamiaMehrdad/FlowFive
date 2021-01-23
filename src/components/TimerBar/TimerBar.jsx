/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useEffect } from 'react';
import './TimerBar1.css';

export default function TimerBar(props){

// let index = 0;
// let chat = props.user.chat;
// const [msg, setMsg] = useState('');
 
//   useEffect(() => {
//     const interval = setInterval(() => {
      
//       if( index < chat.length ) 
//          setMsg( msg => msg + chat.charAt( index++ ) );
//       else
//          clearInterval(interval)
//     }, 100);
//     return () => clearInterval(interval);
//   }, []);


    return(
        <>
         { props.user?
             (
                <div className="TimerBar-main">
                    <img className='TimerBar-image' src={props.user.avatar} />
                    <p className="TimerBar-text">WAIT</p>
                    <div className="TimerBar">
                    </div>
                </div>
             ) : null
         }
        </>
    );
}