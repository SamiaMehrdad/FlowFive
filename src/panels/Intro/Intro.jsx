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
    //const [error, setError ]          = useState('');
    const [state, handleChange]       = useForm({
        email: '',
    });
  
    const formRef = useRef();

    useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    },[]);

    function playUnknown()
    {
        console.backgroundColor = "#033";
        console.log(" %c PLAY UNKNOWN ","background: #010; color: #0f0; padding: 5px; border-radius:5px");
    }
    return(
        <div id="back">
            <img id="hb-logo" src="HB-small1.jpg" alt="HB Intro" />
            <p id="welcome">As a guest user, you can start playing right now!<br/>
            If you want to have your own private play room and your ranking track, 
            please sign in by your email.
            </p>

            <form  autoComplete="off" ref={formRef} onSubmit={async (e) => {
            e.preventDefault()
            
            try {
                console.log("MSK email check try -->", state);
                await userService.checkEmail(state);
                
              } catch (err) {
                // Invalid user data (probably duplicate email)
                console.log(err.message);
                //setError(err.message)
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
                <button type="submit" className="green noshade">SIGN IN</button>
            </form>
            <button className="noshade" onClick={playUnknown}>PLAY RANDOM</button>
        </div>
    );
};