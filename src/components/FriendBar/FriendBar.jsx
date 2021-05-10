/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: user , buttonLabel , index
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './FriendBar.css';

export default function FriendBar(props){


    return(
        <>
         { props.user?
             (
                <div className="friend-bar lighted blur round-edge" >
                    <img className='smallavatar circle' 
                         src={props.user.avatar} 
                         alt="" />
                    <span className="guestbar-info1">{props.user.nickName}</span>
                    <span className="guestbar-info1 right">#{props.user.rank}</span>
                    <span className="friend-action" 
                       onClick={props.onClick}
                       id={props.user._id}
                       index={props.index}>
                    {props.buttonLabel}
                    </span>
                </div> 
             ) : null
         }    
        </>

    );
};