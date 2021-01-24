/*---------------------------------
Custom react component.
 Component name: 
 Description: Temporary page for login/signup process develope.
                This page is alternative to FlowFivePage
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/
import React, { useState, useRef, useEffect } from 'react';
// import TitleDiv from '../../components/TitleDiv/TitleDiv';
import ActiveRound from '../../panels/ActiveRound/ActiveRound';
import GameBoard from "../../panels/GameBoard/GameBoard";
import Intro from "../../panels/Intro/Intro";
import Main from "../../panels/Main/Main";
import MakeInvitation from "../../panels/MakeInvitation/MakeInvitation";
import MySettings from "../../panels/MySettings/MySettings";
import Password from "../../panels/Password/Password";
import Practice from "../../panels/Practice/Practice";
import RightHome from "../../panels/RightHome/RightHome";
import RoundWait from "../../panels/RoundWait/RoundWait";
import SetActive from "../../panels/SetActive/SetActive";
import ShowRules from "../../panels/ShowRules/ShowRules";
import SignUp from "../../panels/Signup/Signup";
import ViewInvitation from "../../panels/ViewInvitation/ViewInvitation";

import './../FlowFivePage/FlowFivePage.css';




export default function TempPage(props){

let keeper = 'Intro'; 
// let component = PANELS[keeper];
let component = <Intro />;

    return(
        <>
                <div className="app-container">
                    <div className = "app-half left-panel" > {component} </div>
                    <div className = "app-half right-panel" > <br/><button>GAME RULES</button><br/><br/><button>PRACTICE</button></div>
                </div>

        </>
    );
};