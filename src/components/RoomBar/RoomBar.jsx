/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: user , buttonLabel , index
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './RoomBar.css';

export default function RoomBar(props){


    return(
        <>
         { props.bar?
             (
                <div className="friend-bar lighted blur round-edge" >
                 <span className="friend-action" 
                       onClick={props.onClick}
                       id={props.bar.id}
                    >
                    {props.buttonLabel}
                    </span>
                    <img className='smallavatar circle' 
                         src={props.bar.avatar} 
                         alt="" />
                    <span className="roombar-title">{props.bar.nickName}: </span>
                    <span className="roombar-msg">{props.bar.message}</span>
                   
                </div> 
             ) : null
         }    
        </>

    );
};