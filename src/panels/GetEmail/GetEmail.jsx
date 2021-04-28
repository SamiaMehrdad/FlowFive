/*---------------------------------
Custom react panel.
 Description: Intro panel and email entry
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useRef } from 'react';
import './GetEmail.css';
import { useForm } from '../../hooks/useForm';
import userService from '../../utils/userService';

export default function GetEmail(props){

    const [state, handleChange] = useForm({
        email: '',
    });
  
    const formRef = useRef();


    function playUnknown()
    {
        console.log(" %c PLAY UNKNOWN ","background: #010; color: #0f0; padding: 5px; border-radius:5px");
    }

    function OAuth() {
       
    }

    async function formSubmit(e) {
        e.preventDefault()
        try {
            let serverResponse = await userService.checkEmail(state); 
            serverResponse.ok ? props.showPage("GetPassword",null,state)
                            : props.showPage("SignupInfo","Signup",state);
                
        } catch (err) {
            console.log(Date.now(), err.message);
        }
    }

    return(
        <div id="back">
            <img id="hb-logo" src="HB-small1.jpg" alt="Horian Booms" />
            <p id="welcome">Welcome! As a guest user, you can start playing unknown, right now!<br/> 
            But if you want to have your own private play room and your ranking track, 
            please login by your email or Google account.
            </p>

            <form   autoComplete="off" 
                    ref={formRef} 
                    onSubmit={formSubmit}
            >
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange={handleChange}
                    autoFocus
                    required
                />
                <button 
                    type="submit" 
                    className="green noshade round-edge"
                    id="submitButton">
                NEXT
                </button>
            </form>

            <button   
                    onClick={OAuth} 
                    className="blue noshade" >
            LOG IN BY Google
            </button>
<br />
            <button 
                    className="noshade gray" 
                    onClick={playUnknown}>
            PLAY UNKNOWN
            </button>
        </div>
    );
};