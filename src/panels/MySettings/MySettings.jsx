/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React , {useRef, useState, useEffect } from 'react';
import Tooltip from 'react-tooltip';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import FriendsList from '../../components/FriendsList/FriendsList';
import userService from '../../utils/userService';

import './MySettings.css';

export default function MySettings(props){

    const inputFile = useRef(null);
    const [friends , setFriends] = useState(null);
    
 //--------------------------------------   
    async function getFriendsOf() {
        const friendsList = await userService.getFriends( props.user );
        setFriends([...friendsList]);
    }

    useEffect( () => {
        getFriendsOf();
    }, []); 
 
//-----------------------------------------
function logout()
{
    props.handleLogout();
    props.showPage("GetEmail","HomeRight");
}
//-----------------------------------------
function imageClick()
{
    inputFile.current.click(); 
}
//-----------------------------------------
function rebuildFriendsList( newFriends ) {

    setFriends( [...newFriends ] );
    console.log("REBUILT FRIENDS: ",friends);
}
//-----------------------------------------
    return (
    <TitleDiv title="DASHBOARD">
        <br />
        <input type='file' 
               id='file' 
               ref={inputFile} 
               style={{display: 'none'}}/>

        <img    id="my-image" 
                className='prof-image loadable' 
                src="./test.jpg"
                onClick={imageClick} 
                alt="Avatar"
                data-tip
                data-for="avatar-change" />

        {props.user.points ?
            <span   id="nickname"
                    className="main-userinfo prof-nick ">
            {props.user.nickName}
            </span>
        :
            <input  id="nickname"
                    className="main-userinfo round-edge"
                    placeholder={props.user.nickName}
                    maxLength="12"
                    data-tip
                    data-for="n-edit"
            />
        }
        <br/><br/>
  
        <FriendsList user={props.user}
                     friends={friends}
                     rebuildFriendsList = {rebuildFriendsList}
        />

        <div className="bottom-stick setting">
            <button onClick={()=>props.showPage("HomeLeft")} 
                    data-tip
                    data-for="close-tip">
            CLOSE
            </button>

            <button className="blue">
            SECURITY
            </button>
            <button onClick={ logout } >
            LOG OUT !
            </button>
        </div>

        <Tooltip    
            id="avatar-change"
            place="bottom"
            delayShow={500} 
            >
        Click to change your image            
        </Tooltip>
        <Tooltip    
            id="close-tip"
            delayShow={500}
            >
        Save changes, close this panel and go back.            
        </Tooltip>
        <Tooltip    
            id="n-edit"
            place="bottom"
            delayShow={500} 
            >
        Click to edit your name. It will be fixed after you grab some points.
        </Tooltip>
    </TitleDiv>
    );

};