/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, {useState} from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import Messenger from '../../components/Messenger/Messenger';
import GoptionFF from '../../components/GoptionFF/GoptionFF';
import GoptionP from '../../components/GoptionP/GoptionP';
import GoptionFV from '../../components/GoptionFV/GoptionFV';
import WaitingPlayer from '../../components/WaitingPlayer/WaitingPlayer';
import Modal from '../../components/Modal/Modal';
import roomService from '../../utils/roomService';

import './MyPlayRoom.css';

export default function MyPlayRoom(props){

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [players, setPlayers] = useState(1);
    const [gameType, setGameType] = useState('FlowFive');
    
//----------------------------------------------
function modalOk() {
    setModal1(false)
    roomService.close(props.user, props.socket);  
    props.showPage("HomeLeft",""); 
}   

    return(  
        <>  
        {modal1 ?     
                <Modal  title="CLOSING PLAYROOM WARNING"
                        width="30vw"
                        message=" This will close your private play room and kick out 
                                any guest from it. Are you sure to proceed?"
                         onOk={modalOk}
                         onCancel={()=>setModal1(false)}
                         okTitle="CLOSE ANYWAY"
                         cancelTitle="NO! CANCEL"
                        /> 
               : null          
        }
        {modal2 ?     
                <Modal  title="GUEST ACTION"
                        width="50vw"
                        message=" bla bla bla"
                        onOk={()=>setModal2(false)}
                        okTitle="CLOSE"
                        > 
                        <p>TST</p>
                </Modal>        
               : null          
        }
        <TitleDiv title="MY PLAYROOM">
        {/* NOTE: CSS id selector is not targeting!! */}
            <Messenger  width="70%"
                        top="6.5vh"
                        right="2vh" /> 
           <br />
            <LabelDiv   className="guest-list" 
                        title="GUESTS" 
                        height="40%">
            <WaitingPlayer user={props.user}></WaitingPlayer>
            <WaitingPlayer user={props.user}></WaitingPlayer>
            <WaitingPlayer user={props.user}></WaitingPlayer>
            </LabelDiv>
            {/* <div > */}
            <Button.Group className="games"  >
                <Button content = "FlowFive" 
                        className="games-bt" 
                        style={{color: 'green', }} 
                        onClick={()=>setGameType('FlowFive')}/>
                <Button content = "PENTRATEGY" 
                        className="games-bt" 
                        style={{color: 'CornflowerBlue', }} 
                        onClick={()=>setGameType('PENTRATEGY')}/>
                <Button content="Four's Vigor"
                        className="games-bt" 
                        style={{color: 'DarkSlateGray', }} 
                        onClick={()=>setGameType('FoursVigor')}>
                        
                </Button>
                <Button content = "•••" className="games-bt" />
            </Button.Group>
            {/* </div> */}
            <LabelDiv   title="GAME OPTIONS" 
                        height="50%" >
                {gameType === "FlowFive" ?
                <GoptionFF />
                : null }
                {gameType === "PENTRATEGY" ?
                <GoptionP />
                : null }
                {gameType === "FoursVigor" ?
                <GoptionFV />
                : null }
            </LabelDiv>
            <div className="bottom-stick">
            <Button content='CLOSE ROOM' 
                    icon='close' 
                    labelPosition='left' 
                    onClick={()=>setModal1(true)}
                    className="bt" />
            <Button content={`START GAME - ${players+1}`} 
                    icon='play' 
                    labelPosition='left'
                    onClick={()=>setModal2(true)}  
                    className="bt" />
            </div> 
        </TitleDiv>
        </>
    );
};