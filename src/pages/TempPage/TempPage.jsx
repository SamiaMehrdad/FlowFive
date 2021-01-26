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
import RightHome from '../../panels/RightHome/RightHome';
import Practice from '../../panels/Practice/Practice';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import WaitingPlayer from '../../components/WaitingPlayer/WaitingPlayer';

export default function TempPage(props){
    return(
        <>
                <div className="app-container">
                    <div className = "app-half left-panel" > <Intro /> </div>
                    <div className = "app-half right-panel" > 
                    {/* <RightHome /> */}

                    <br/><button>GAME RULES</button>
                    <br/><br/>
                    <button>PRACTICE</button> 

                    </div>

                </div>

        </>
    );
};