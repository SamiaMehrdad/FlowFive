/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 Parent: FlowFivePage
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React ,{ useState, useEffect } from 'react';
import { Button,} from 'semantic-ui-react';
import Tooltip from 'react-tooltip';
import Asap from 'asap';
import './HomeLeft.css';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import RoomBar from '../../components/RoomBar/RoomBar';
//import userService from '../../utils/userService';
import roomService from '../../utils/roomService';

export default function HomeLeft(props){

    const[ openRooms, setOpenRooms ] = useState([]);
    //if( !props.user ) window.location.reload();

    async function  getOpenRooms() {
            let opens = await roomService.getOpenRooms( props.user._id );
            if( opens )
            {
                let rooms = opens.rooms;
                let owners = opens.owners;
                let bars = [];
                rooms.map( (room, index) => {
                    bars.push( {
                        avatar: owners[index].avatar,
                        nickName: owners[index].nickName,
                        hostId: owners[index]._id, 
                        message: room.message,
                        status: room.status,
                        id: room._id,
                    } );
            });
            setOpenRooms([...bars]);
            console.log("GETTING OPEN ROOMS BARS: ",bars );
            }
    }

    //---------------------------------
    useEffect( () => {
        getOpenRooms();
        let timer = setInterval( async () => { getOpenRooms();   
        }, 10000 );
        return () => {
            clearInterval( timer );
        }
    }, [] );
    
    
    //---------------------------------
    function openPlayRoom() {
        // props.showPage("MakeInvitation","");
        roomService.open(props.user._id, props.socket);
        props.showPage("MyPlayRoom");
    }
    
    //---------------------------------
    function goSetting() {
        props.showPage("MySettings","");
    }
    
    // Bug: error on joining to room workflow, runs without clicking 
    // fixed: add e=> to onClick of RoomBar

    //---------------------------------
    function goToPlayRoom(room) {
       // if(openRoom.status === 'open')
        //props.showPage('ActiveRound','Play'); //test
            console.log("join to ",room, props.user._id);
        roomService.join(props.user._id, room.hostId, props.socket);
    }


    return(
        <>
            <img    className='circle boxshaded largavatar' 
                    src="./test.jpg" 
                    id="main-image" 
                    alt="Avatar"
                    onClick={ goSetting }
                    data-tip
                    data-for="setting-tip"
                    />
            <span   className="main-userinfo">
             {props.user.nickName} - Rank:27
            </span>
          
            <br />
            <br />
            <br />
            <LabelDiv   id="friend-rooms" 
                        title="FRIENDS OPEN ROOMS" 
                        height="80%">
                {openRooms?
                openRooms.map( openRoom =>         
                <RoomBar    bar={openRoom} 
                            onClick={e=>goToPlayRoom(openRoom)}
                            buttonLabel = {openRoom.status === 'open'?
                                            "JOIN"
                                          : "WATCH" }    
                />
                )
                : null }
            </LabelDiv>
            <div className="bottom-stick main-page ">

            <Button content='OPEN PLAY ROOM' 
                    icon='sign-in' 
                    labelPosition='left' 
                    onClick={openPlayRoom}
                    className="bt green" />
            <Button content='PLAY UNKNOWN' 
                    icon='spy' 
                    labelPosition='left'  
                    className="bt" />

            </div>

            <Tooltip    id="setting-tip"
                        delayShow={500}>
            Profile, friends and security settings dashboard.            
            </Tooltip>
        </>
    );
};