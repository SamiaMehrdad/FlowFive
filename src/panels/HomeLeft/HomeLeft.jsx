/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 Parent: FlowFivePage
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './HomeLeft.css';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import GuestBar from '../../components/GuestBar/GuestBar';
//import userService from '../../utils/userService';
import roomService from '../../utils/roomService';

export default function HomeLeft(props){

    //if( !props.user ) window.location.reload();

    function openPlayRoom() {
       // props.showPage("MakeInvitation","");
       roomService.open(props.user);
       props.showPage("MyPlayRoom");
    }

    function goSetting() {
        props.showPage("MySettings","");
    }


    function goToPlayRoom() {
        props.showPage('ActiveRound','Play');
    }


    return(
        <>
        {props.user?
            <img    className='TimerBar-image' 
                    src="./test.jpg" 
                    id="main-image" 
                    alt="Avatar"/>
         : null }           
        {props.user ?
            <span   className="main-userinfo">
             {props.user.nickName}<br />Rank:28
            </span>
         : null }
            <span   className="setting-icon"  
                    onClick={ goSetting }>
            {'\u2699'} {/*unicode for gear icon */}
            </span>
            <br />
            <br />
            <br />
            <LabelDiv   id="friend-rooms" 
                        title="FRIENDS OPEN ROOMS" 
                        height="75%">
                <GuestBar   user={props.user} 
                            onClick={goToPlayRoom} 
                />
            </LabelDiv>
            <div className="bottom-stick main-page ">
                <button className="green" 
                        onClick={ openPlayRoom } >
                OPEN PLAY ROOM
                </button>
                <button >
                TRY UNKNOWN
                </button>
            </div>    
        </>
    );
};