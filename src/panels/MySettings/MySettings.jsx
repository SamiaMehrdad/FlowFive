/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React , {useRef, useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import Tooltip from 'react-tooltip';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import FriendsList from '../../components/FriendsList/FriendsList';
import userService from '../../utils/userService';

import './MySettings.css';

export default function MySettings(props){

    const inputFile = useRef(null);
    const [friends , setFriends] = useState( [] ); // friend = {avatar, nickname, _id}


 useEffect(() => {
    getFriendsOf();

 }, [])
 //--------------------------------------   
    async function getFriendsOf() {
        const friendsList = await userService.getFriends( props.user );
        if( friendsList && friendsList.length > 0 ) // check if connection error
            setFriends([...friendsList]);
    }
//---------------------------------------
async function addFriend(friend) {
    // if friend is not exists in list, then add it
    let isNew = true;
    friends.map(item => {if(item._id === friend._id) isNew = false} )
    if( isNew )
    {
        setFriends([...friends, friend]);
        userService.addFriend( friend._id );
    }
}

//---------------------------------------
async function removeFriend(id) {
    
    const removeIndex = friends.map( (friend) => friend._id ).indexOf( id );
    friends.splice(removeIndex, 1);
    setFriends([...friends]);
    userService.removeFriend( id );
}
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
function refreshFriends( newFriends ) {

    setFriends( [...friends, newFriends ] );
    //console.log("REBUILT FRIENDS: ",friends);
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
                     removeFriend={removeFriend}
                     addFriend={addFriend}
        />

        <div className="bottom-stick setting">
            <Button content='CLOSE' 
                    icon='x' 
                    labelPosition='left'
                    onClick={()=>props.showPage("HomeLeft")} 
                    data-tip
                    data-for="close-tip"  
                    className="bt smallbt" />
            <Button content='SECURITY' 
                    icon='key' 
                    labelPosition='left'  
                    className="bt blue smallbt" />
            <Button content='LOG OUT!'
                    onClick={ logout } 
                    icon='sign-out' 
                    labelPosition='left'  
                    className="bt smallbt" />

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