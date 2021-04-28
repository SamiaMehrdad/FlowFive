/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React , {useRef, useState, useEffect } from 'react';
import Tooltip from 'react-tooltip';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import FriendBar from '../../components/FriendBar/FriendBar';
import AddFriend from '../../components/AddFriend/AddFriend';
import userService from '../../utils/userService';

import './MySettings.css';

export default function MySettings(props){

    const inputFile = useRef(null);
   // let friendList=[] ;
    const [friends , setFriends] = useState(null);
    const [searchBox, setSearchBox] = useState(false);
    
    async function getFriendsOf() {
        const friendList = await userService.getFriends(props.user);
        setFriends(friendList);
        //console.log(Date.now(),"GET FRIENDS IN getFriendsOf() -->",friendList);
        //return friendList;
    }

    useEffect( () => {
        getFriendsOf();
    }, []);

// while( ! friends.length )
//  console.log('.');
// console.log(Date.now(),"GET FRIENDS OUT of getFriendsOf() --> ",friends);


function close()
{
    props.showPage("HomeLeft");
}

function logout()
{
    props.handleLogout();
    props.showPage("GetEmail","HomeRight");
}

function imageClick()
{
    inputFile.current.click(); 
}

function showSearchBox() {
    setSearchBox(true);
}

function removeFriend(e) {
    console.log("REMOVE #",e.currentTarget.getAttribute("index"), e.currentTarget.getAttribute("id"))
}

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
            <Tooltip    
                id="avatar-change"
                place="bottom"
                delayShow={500} 
                >
            Click to change your image            
            </Tooltip>
        {props.user.points ?
            <span   id="nickname"
                    className="main-userinfo prof-nick ">
            {props.user.nickName}
            </span>
        :
        <>
            <input  id="nickname"
                    className="main-userinfo round-edge"
                    placeholder={props.user.nickName}
                    maxLength="12"
                    data-tip
                    data-for="n-edit"
            />
            <Tooltip    id="n-edit"
                        place="bottom"
                        delayShow={500} 
                        >
            Click to edit your name. It will be fixed after you grab some points.
            </Tooltip>
        </>
        }
        <br/>
        <LabelDiv   className="friends" 
                    title="FRIENDS" 
                    height="80%">
            <button className="add-friend round-edge"
                    data-tip
                    data-for="add-tip"
                    onClick={showSearchBox}>
            ADD
            </button>

            <Tooltip    id="add-tip"
                        place="bottom"
                        delayShow={500} 
                        >
            Search and add friends to your list            
            </Tooltip>
        { friends && friends.length ?
            friends.map((friend, index) =>
            <FriendBar  user={friend}
                        buttonLabel="REMOVE"
                        onClick={removeFriend}
                        key={friend._id}
                        index={index}
                         />
                        )
        : <p id='nf-message'>You have no friends in list. Add some!</p>
        }
        </LabelDiv>    
        <div className="bottom-stick setting">
            <button onClick={close} 
                    data-tip
                    data-for="close-tip">
            CLOSE
            </button>
            <Tooltip    id="close-tip"
                        delayShow={500}
                        >
            Save changes, close this panel and go back.            
            </Tooltip>
            <button className="blue">
            SECURITY
            </button>
            <button onClick={ logout } >
            LOG OUT !
            </button>
        </div>
        <div    id="search-add"
                className = {searchBox? "card" : "hidden"}>
            <span   className="close-icon large-icon"
                    onClick={()=>setSearchBox(false)}>
            X
            </span> 
<br /><br /><br />
            <AddFriend user={props.user}/>
    
        </div>
    </TitleDiv>
    );

};