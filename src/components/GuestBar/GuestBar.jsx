/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './GuestBar.css';

export default function GuestBar(props){

    return(
        <div className="invitebar-main">
         { props.user?
             (
                <> 
                <img className='invite-image' src={props.user.avatar} />
                <span className="guestbar-info"> {props.user.nikname} #{props.user.rank} </span>
                </>
             ) : null
         }
        
        <span className="close-icon">X</span>    
        </div>

    );
};