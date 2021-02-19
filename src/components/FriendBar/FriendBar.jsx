/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './FriendBar.css';

export default function FriendBar(props){

    return(
        <>
         { props.user?
             (
                <div className="friend-bar" onClick={props.onClick}>
                    <img className='invite-image1' src={props.user.avatar} alt="" />
                    <span className="guestbar-info1">{props.user.nickName}</span>
                    <span className="guestbar-info1 right">#{props.user.rank}</span>
                </div>
             ) : null
         }    
        </>

    );
};