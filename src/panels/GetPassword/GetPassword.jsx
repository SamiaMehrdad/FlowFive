/*---------------------------------
Custom react panel.
 Description: Intro panel and email entry
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef } from 'react';
// import './GetPassword.css';

import userService from '../../utils/userService';

export default function GetPassword(props){
  
    const formRef = useRef();

    const [state, setState] = useState({
        email: props.temp.email,
        pw: '',
        tempUser: localStorage.getItem('tempUser')
    });


    function handleChange(e){
        setState({
          ...state, [e.target.name]: e.target.value
        })
      }


    function goBack()
    {
        props.showPage("GetEmail");
    }


    async function formSubmit(e){
        e.preventDefault()
        try {
            await userService.login(state);
//TODO DEBUG: this part is added to prevent very strange login problem!
            if( props.user && state.email === props.user.email) 
                props.showPage("HomeLeft");
            else
                window.location.reload();
/*---- till here. without this, previously logged in user data shows up
and needs a page reload to show current one! */                                 
            } catch (err) {
            console.log(err.message); //TODO: show user a wrong password message
            }
    }

    
    return(
        <div id="back"> 
            <img id="hb-logo" src="HB-small1.jpg" alt="Horian Booms" />
            <p id="welcome">WELCOME <br/>
            {props.temp.email}
            </p>

            <form   autoComplete="off" 
                    ref={formRef} 
                    onSubmit={ formSubmit }
            >
 
                <input 
                    type="password" 
                    name="pw" 
                    placeholder="Password"
                    value={ state.password}
                    onChange={handleChange}
                    autoFocus
                    required
                    style= {{ display: "block" }}
                />
                
                <a href=" test " >Forgot password</a>
                <br/>
                <button type="submit" 
                        className="green noshade">
                SIGN IN
                </button>
            </form>
 
            <button className="noshade gray " 
                    onClick={goBack}>
            BACK
            </button>
        </div>
    );
};