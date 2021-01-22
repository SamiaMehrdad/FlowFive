/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useEffect } from 'react';
import './WaitingPlayer.css';

export default function WaitingPlayer(props){

let index = 0;
let chat = props.user.chat;
const [msg, setMsg] = useState('');
 
  useEffect(() => {
    const interval = setInterval(() => {
      
      if( index < chat.length ) 
         setMsg( msg => msg + chat.charAt( index++ ) );
      else
         clearInterval(interval)
    }, 100);
    return () => clearInterval(interval);
  }, []);


    return(
        <div className="WaitingPlayer-main">
         { props.user?
             (
                <img className='WaitingPlayer-image' src={props.user.avatar} />
             ) : null
         }
        <span className="WaitingPlayer-chat"> {msg} </span>  
        </div>

    );
};