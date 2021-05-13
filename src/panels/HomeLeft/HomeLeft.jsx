/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 Parent: FlowFivePage
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React ,{ useState, useEffect } from 'react';
import Tooltip from 'react-tooltip';
import './HomeLeft.css';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import RoomBar from '../../components/RoomBar/RoomBar';
//import userService from '../../utils/userService';
import roomService from '../../utils/roomService';

export default function HomeLeft(props){

    const[ openRooms, setOpenRooms ] = useState([]);
    //if( !props.user ) window.location.reload();

    useEffect(() => {
        let timer = setInterval( async () => {
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
                        message: room.message,
                        id: room._id,
                    } );
            });
            setOpenRooms([...bars]);
            console.log("GETTING OPEN ROOMS BARS: ",bars );
            }
               
        }, 10000);
        return () => {
            clearInterval( timer );
        }
    });
    

    // async function getOpenRooms() {
    //     const roomsAndOwners =  await roomService.getOpenRooms( props.user._id );
    //     // return roomsAndOwners;
    //     return await roomsAndOwners;
    // }

    function findFriendsOpenRooms(uid) {
        
    }

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
                <RoomBar  bar={openRoom} 
                            onClick={goToPlayRoom}
                            buttonLabel="JOIN" 
                />
                )
                : null }
            </LabelDiv>
            <div className="bottom-stick main-page ">
                <button className="green" 
                        onClick={ openPlayRoom } >
                OPEN PLAY ROOM
                </button>
                <button >
                PLAY UNKNOWN
                </button>
            </div>

            <Tooltip    id="setting-tip"
                        delayShow={500}>
            Profile, friends and security settings dashboard.            
            </Tooltip>
        </>
    );
};