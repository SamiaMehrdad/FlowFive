/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import WaitingPlayer from '../../components/WaitingPlayer/WaitingPlayer';
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
                <Modal  title="CLOSING PLAYROOM WARNING"
                        width="30vw"
                        message=" This will close your private play room and kick out 
                                any guest from it. Are you sure to proceed?"
                         onOk={modalOk}
                         onCancel={modalCancel}
                         okTitle="CLOSE ANYWAY"
                         cancelTitle="NO! CANCEL"
                        /> 
               : null          
        }
        <TitleDiv title="MY PLAYROOM">
            <LabelDiv   className="guest-list" 
                        title="GUESTS" 
                        height="30%">
            <WaitingPlayer user={props.user}></WaitingPlayer>
            <WaitingPlayer user={props.user}></WaitingPlayer>
            <WaitingPlayer user={props.user}></WaitingPlayer>
            </LabelDiv>
            
            <LabelDiv   title="GAME OPTIONS" 
                        height="20%" >
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
            <Button content='CLOSE ROOM' 
                    icon='close' 
                    labelPosition='left' 
                    onClick={close}
                    className="bt" />
            <Button content='START GAME' 
                    icon='play' 
                    labelPosition='left'  
                    className="bt" />
            </div> 
        </TitleDiv>
        </>
    );
};