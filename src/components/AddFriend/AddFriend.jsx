/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React , {useRef, useState } from 'react';
import Tooltip from 'react-tooltip';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import FriendBar from '../../components/FriendBar/FriendBar';
import userService from '../../utils/userService';

export default function AddFriend(props){

 const [players, setPlayrs]= useState([]);

 async function searchUsers(partial){
     const playerList = await userService.searchUsers( partial );
     setPlayrs( playerList );
     console.log(Date.now(),"GET PLAYERS IN AddFriend() -->",playerList);
 }

 function addFrindtoList(e) {
     console.log("ADD FRIEND #",e.currentTarget.getAttribute("index"), e.currentTarget.getAttribute("id"))
 }

    return (
        <>
            <div id="search" className="round-edge">
              {'\u{1F50D}'} {/* long unicode formatting */}
              <input type="text" 
                     name="search" 
                     placeholder="some letters"
                     onChange={ 
                                e => {
                                      searchUsers(e.target.value);
                                     }
                              }  
              />
            </div>
            <LabelDiv   title="MATHCHED FOUND"
                        id="search-bar"
                        className="blur"
                        height="95%">
                { players && players.length ? 
                    players.map((player,index)=>        
                        <FriendBar user={player}
                                   buttonLabel="ADD"
                                   key={player._id}
                                   index={index}
                                   onClick={addFrindtoList}
                        /> )
                : <p style={{padding: "20px"}}>No Match found.
                    <br/><br/>
                     Use search box above
                     to find all users who their nick name
                     or real name is partially matched.</p>      
                }
            </LabelDiv>
        </>

        );
    }