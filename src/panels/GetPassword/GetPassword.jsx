/*---------------------------------
Custom react panel.
 Description: Intro panel and email entery
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
// import './GetPassword.css';
import { useForm } from '../../hooks/useForm';
import userService from '../../utils/userService';

export default function GetPassword(props){
  
    const formRef = useRef();

    const [state, setState]       = useState({
        email: props.temp.email,
        pw: '',
    });

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      }

    function goBack()
    {
        props.showPage("GetEmail");
    }
    return(
        <div id="back">
            <img id="hb-logo" src="HB-small1.jpg" alt="Horian Booms" />
            <p id="welcome">WELCOME <br/>
            {props.temp.email}
            </p>

            <form   autoComplete="off" 
                    ref={formRef} 
                    onSubmit={ async (e) => {
                        e.preventDefault()
                        
                        try {
                            console.log("TRY LOGIN WITH --> ", state);
                            await userService.login(state);
                            props.showPage("HomeLeft");
                            
                            } catch (err) {
                            console.log(err.message);
                            }
                    }}>
 
                <input 
                    type="password" 
                    name="pw" 
                    placeholder="Password"
                    value={ state.password}
                    onChange={handleChange}
                    autoFocus
                    required
                />
                <br/>
                <a href=" test " >Forgot password</a>
                <br/><br/>
                <button type="submit" 
                        className="green noshade">
                SIGN IN
                </button>
            </form>
            <br/><br/>
            <button className="noshade bottom-stick" 
                    onClick={goBack}>
            BACK
            </button>
        </div>
    );
};