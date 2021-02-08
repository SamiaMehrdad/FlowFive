/*---------------------------------
Custom react panel.
 Description: Intro panel and email entery
 Props:
Developped by: Mehrdad Samia - 2021
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

    //console.log("User Is ---> ", props.temp);


    function playUnknown()
    {
        console.log(" %c PLAY UNKNOWN ","background: #010; color: #0f0; padding: 5px; border-radius:5px");
    }
    function OAuth() {
       
    }
    return(
        <div id="back">
            <img id="hb-logo" src="HB-small1.jpg" alt="Horian Booms" />
            <p id="welcome">Welcome! As a guest user, you can start playing right now! 
            If you want to have your own private play room and your ranking track, 
            please enter your email or login by Google.
            </p>

            <form  autoComplete="off" ref={formRef} onSubmit={ 
                async (e) => {
                                e.preventDefault()
            
                                try 
                                {
                                    let userPromise = await userService.checkEmail(state); 
                                    //props.stepUpLogin(userPromise);
                                    userPromise.ok ? props.showPage("GetPassword",null,state)
                                                   : props.showPage("SignupInfo","Signup",state);
                                        
                                } catch (err) {
                                    console.log(Date.now(), err.message);
                                }
                              }} >
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
                    className="green noshade"
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
                    className="noshade" 
                    onClick={playUnknown}>
            PLAY UNKNOWN
            </button>
        </div>
    );
};