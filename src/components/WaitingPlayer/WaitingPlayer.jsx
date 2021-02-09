/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './WaitingPlayer.css';
import AnimSpan from './AnimSpan';

export default function WaitingPlayer(props){

    return(
        <div className="WaitingPlayer-main">
         { 
           props.user?
           ( <img className='WaitingPlayer-image' src={props.user.avatar} alt="Avatar"/> ) 
           : null
         }
         <AnimSpan text={props.user.chat} />
        </div>
    );
};