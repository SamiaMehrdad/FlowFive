/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import GuestBar from '../../components/GuestBar/GuestBar';
import CheckBox from '../../components/CheckBox/CheckBox';
import Modal from '../../components/Modal/Modal';
import roomService from '../../utils/roomService';

import './MyPlayRoom.css';

export default function MyPlayRoom(props){

    const [modal, setModal] = React.useState(false);
//----------------------------------------------
function modalCancel() {
    console.log("Modal cancelled");
    setModal(false);
} 
//----------------------------------------------
function modalOk() {
    setModal(false)
    roomService.close(props.user);  
    props.showPage("HomeLeft",""); 
}   
//----------------------------------------------
function close() { 
 setModal(true);  
 //---------------------------------------------
}  
    return(  
        <>  
        {modal ?     
                <Modal  title="THIS IS MODAL TITLE"
                        width="30vw"
                        message=" This is modal message and bla bla bla ... 
                         This is modal message and bla bla bla ..."
                         onOk={modalOk}
                         onCancel={modalCancel}
                        /> 
               : null          
        }
        <TitleDiv title="MY PLAYROOM">
            <LabelDiv   className="guest-list" 
                        title="GUESTS" 
                        height="min(30vh , 30vw)">

            </LabelDiv>
            
            <LabelDiv   title="GAME OPTIONS" 
                        height="60px" >
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
            <LabelDiv   title="ROOM MESSAGE" 
                        height="30px">
                <input className="full-length"></input>
            </LabelDiv>
            <br />
            <br />
            <div className="bottom-stick">

                <button >
                    START GAME
                </button>
                <button onClick={close} >
                    CLOSE ROOM
                </button>
            </div> 
        </TitleDiv>
        </>
    );
};