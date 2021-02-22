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
import FriendBar from '../../components/FriendBar/FriendBar';
import userService from '../../utils/userService';

// import './MySettings.css';

export default function AddFriend(props){

    const [players, setPlayrs]= useState([]);

 async function searchUsers(startLetters){
     const playerList = await userService.searchUsers( startLetters );
     setPlayrs( playerList );
     console.log(Date.now(),"GET PLAYERS IN AddFriend() -->",playerList);
 }

 useEffect(() => {
    searchUsers();
}, []);

    return (
        <>
            <LabelDiv   title="MATHCHED FOUND"
                        id="search-bar"
                        height="90%">
                { players && players.length ? 
                    players.map((player)=>        
                        <FriendBar user={player}
                                   buttonLabel="ADD"
                        /> )
                : <p >BLA Bla bLa</p>      
                }
            </LabelDiv>
        </>

        );
    }