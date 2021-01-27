/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
import './Intro.css';
import { useForm } from '../../hooks/useForm';
import userService from '../../utils/userService';

export default function Intro(props){

    const [invalidForm, setValidForm] = useState(false);
    const [error, setError ]          = useState('');
    const [state, handleChange]       = useForm({
        email: '',
    });
  
    const formRef = useRef();

    useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    });


    return(
        <div id="back">
            <img id="hb-logo" src="HB-small1.jpg" alt="HB Intro" />
            <p id="welcome">As a guest user, you can start playing right now, 
            but if you don't sign in, it is impossible to calculate your ranking 
            and points. Also if sign in, you can have your own private play room 
            and invite your friends to join and play. It is so simple, just enter 
            your email and hit "Sign in"</p>

            <form  autoComplete="off" ref={formRef} onSubmit={async (e) => {
            e.preventDefault()
            
            try {
                console.log("MSK email check try -->", state);
                await userService.checkEmail(state);
                
              } catch (err) {
                // Invalid user data (probably duplicate email)
                setError(err.message)
              }
          }}>

                <label>Email:  
                    <input 
                        type="email" 
                        name="email" 
                        value={ state.email}
                        onChange={handleChange}
                        required
                    />
                </label><br/>
                <button type="submit" className="green">SIGN IN</button>
                <button >PLAY RANDOM</button>
            </form>
        </div>
    );
};