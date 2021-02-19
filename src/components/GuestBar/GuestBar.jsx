/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './GuestBar.css';

export default function GuestBar(props){

    return(
        <div className="bar" onClick={props.onClick}>
         { props.user?
             (
                <> 
                <img className='invite-image' src={props.user.avatar} alt="Guest" />
                <span className="guestbar-info"> {props.user.nikName} #{props.user.rank} </span>
                </>
             ) : null
         }
        
        <span className="close-icon" onClick={props.close}>X</span>    
        </div>

    );
};