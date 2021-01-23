/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useEffect } from 'react';
import './WaitingPlayer.css';
import AnimSpan from './AnimSpan';

export default function WaitingPlayer(props){

    return(
        <div className="WaitingPlayer-main">
         { 
           props.user?
           ( <img className='WaitingPlayer-image' src={props.user.avatar} /> ) 
           : null
         }
         <AnimSpan text={props.user.chat} />
        </div>
    );
};