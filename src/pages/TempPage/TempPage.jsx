/*---------------------------------
Custom react component.
 Component name: 
 Description: Temporary page for login/signup process develope.
                This page is alternative to FlowFivePage
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/
import React from 'react';

import Intro from "../../panels/Intro/Intro";
import '../FlowFivePage/FlowFivePage.css';




export default function TempPage(props){

    return(
        <>
                <div className="app-container">
                    <div className = "app-half left-panel" > <Intro /> </div>
                    <div className = "app-half right-panel" > <br/><button>GAME RULES</button><br/><br/><button>PRACTICE</button></div>
                </div>

        </>
    );
};