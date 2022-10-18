/*---------------------------------
Custom react panel.
 Description: Intro panel and email entry
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useRef } from 'react';
import { Button } from 'semantic-ui-react';
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
            <p id="welcome">Welcome! You can start playing as a guest right now!<br/> 
            But if you want your own private multy player room and your ranking track, 
            please login by your email or Google account.
            </p>

            <form   autoComplete="off" 
                    ref={formRef} 
                    onSubmit={formSubmit}
            >
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email"
                    onChange={handleChange}
                    autoFocus
                    required
                />
                <Button
                    id="submitButton"
                    content="Login"
                    type="submit" 
                    icon='arrow right'
                    labelPosition='left'
                    className="bt green short" />            

            </form>
            <Button content='LOG IN BY GOOGLE' 
                    icon='google' 
                    labelPosition='left'
                    onClick={OAuth}   
                    className="bt blue" />
            <br/>        
            <Button content='PLAY AS GUEST' 
                    icon='spy' 
                    labelPosition='left'
                    onClick={playUnknown}   
                    className="bt " />

        </div>
    );
};