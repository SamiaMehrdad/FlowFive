/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import InviteBar from '../../components/InviteBar/InviteBar';
import GuestBar from '../../components/GuestBar/GuestBar';
import './MySettings.css';

export default function MySettings(props){

function close()
{
    props.showPage("Main");
}

function logout()
{
    props.showPage("logout");
}
    return (
    <>
        <img className='TimerBar-image loadable' src="./test.jpg" id="main-image" />
        <span className="main-userinfo editable">Nick Name</span>
        <br /><br /><br />
        <button className="security-btn">SECURITY</button>
        <br />
        <LabelDiv className="friends" title="FRIENDS" height="240px">

        </LabelDiv>    
        <div className="bottom-stick">
            <button onClick={close} >
                CLOSE
            </button>
            <button onClick={ logout } >
                LOG OUT !
            </button>
        </div>
    </>
    );

};