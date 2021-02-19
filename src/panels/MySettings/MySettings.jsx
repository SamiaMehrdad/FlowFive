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
import userService from '../../utils/userService';

import './MySettings.css';

export default function MySettings(props){

    const inputFile = useRef(null);
   // let friendList=[] ;
    const [friends , setFriends] = useState(null);
    
async function getFriendsOf() {
    const friendList = await userService.getFriends(props.user);
    setFriends(friendList);
    console.log(Date.now(),"GET FRIENDS IN getFriendsOf() -->",friendList);
    
    //return friendList;
}



//let  friends = getFriendsOf(); 
// setFriends(getFriendsOf());
useEffect(() => {
    getFriendsOf();
}, [])

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

// function makeFriendsList(){
//  let result = [];
//  if(friends)   
//     for(let friend in friends)
//         result.push (
//             <p>
//             {friend.nickName}
//             </p>
//         )
//  return result;   
// }

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
                alt="Avatar" />
        {props.user.points ?
            <span   //id="prof-nick" 
                    className="main-userinfo prof-nick ">
            {props.user.nickName}
            </span>
        :
            <input  id="nickname-edit"
                    className="main-userinfo prof-nick "
                    placeholder={props.user.nickName}
                    maxLength="12"
            /> 
        }

        <LabelDiv   className="friends" 
                    title="FRIENDS" 
                    height="80%">
            <button className="add-friend"
                    data-tip
                    data-for="add-tip">
            ADD
            </button>

            <Tooltip    id="add-tip"
                        place="bottom"
                        delayShow={500} 
                        >
            Search and add friends to your list            
            </Tooltip>
        { friends && friends.length ?
            friends.map((friend) =>
            <FriendBar user={friend}>

            </FriendBar>)
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
    </TitleDiv>
    );

};