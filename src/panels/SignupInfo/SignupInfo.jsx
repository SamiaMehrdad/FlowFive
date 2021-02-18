/*---------------------------------
Custom react panel.
 Description: Intro panel and email entry
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './SignupInfo.css';


export default function SignupInfo(props){



    function goBack()
    {
        props.showPage("GetEmail","HomeRight");
    }
    return(
        <div id="back">
            <img id="hb-logo" src="HB-small1.jpg" alt="Horian Booms" />
            <p id="welcome">Signup info and more instructions.
            </p>

            <br/><br/>
            <button className="noshade bottom-stick gray" onClick={goBack}>CANCEL</button>
        </div>
    );
};