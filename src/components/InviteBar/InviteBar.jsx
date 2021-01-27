/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './InviteBar.css';

export default function InviteBar(props){

    return(
        <div className="invitebar-main bar">
         { props.avatars?
             props.avatars.map((item, index) => (
            <img className='invite-image' src={item} key={index} alt="Guest" />
        )) : null
        }
        <span className="invitebar-msg"> {props.message} </span>
        <span className="close-icon">X</span>    
        </div>

    );
};

//TODO: bug: close-icon is not right-sticking to his own parent. 
// Now it is fake, and is fixed when others scroll! because of it's position: absolute
// close-icon and bar classes are located in App.css