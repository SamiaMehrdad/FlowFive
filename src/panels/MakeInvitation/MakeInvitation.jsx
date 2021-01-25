/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import GuestBar from '../../components/GuestBar/GuestBar';
import CheckBox from '../../components/CheckBox/CheckBox';
import './MakeInvitation.css';

export default function MakeInvitation(props){
function close() {
 props.showPage("Main"); 
}
    return(
        <TitleDiv title="INVITE TO PLAY">
            <LabelDiv className="guest-list" title="GUESTS" height="120px">
                <GuestBar />
                <GuestBar />
                <GuestBar />
            </LabelDiv>
            <button className="add-guest">ADD GUEST</button>
            <LabelDiv title="GAME OPTIONS" height="60px" >
                <CheckBox title="Limit time to" />
                <input id="time-value" ></input> 
                <span style={{  fontSize: "11px", 
                                position: "relative",
                                top: "-5px"}}> 
                                 Seconds       
                </span>
                <CheckBox title="Play BLIND mode" />
                <br />
                <CheckBox title="Player loses if time goes out           " />
                <CheckBox title="Play TRADING mode" />
            </LabelDiv>
            <br />
            <LabelDiv title="INVITATION MESSAGE" height="30px">
                <input className="full-length"></input>
            </LabelDiv>
            <div className="bottom-stick">
                <button >
                    SEND
                </button>
                <button onClick={close} >
                    CANCEL
                </button>
            </div> 
        </TitleDiv>
    );
};