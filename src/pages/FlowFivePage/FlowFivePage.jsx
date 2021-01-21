/*---------------------------------
Custom react component.
 Component name: 
 Description: Main flowfive app dual screen
 Props:
 Parent: App
Developped by: Mehrdad Samia - 2021
----------------------------------*/
import React, { useState, useRef, useEffect, Suspense } from 'react';
import ErrorBoundary from "./ErrorBoundary";
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

import './FlowFivePage.css';

const PAGES = ['ActiveRound',

            ];

let PS = [] ;

function loadComponent(name) {
  const Component = React.lazy(() =>
    import (`../../panels/${name}/${name}`)
  );
  return Component;
}



export default function IntroPage(props){

     for (let page of PAGES ) {
   // console.log(`../../panels/${page}/${page}`,',');
     const test = loadComponent(page); 
    console.log ( "COMPONENT: ", test);
 }
 console.log("Intro COMPONENT:", loadComponent('Intro'));
//  PS.push( loadComponent ( PAGES[0]))
//  console.log(PS);

// const PANELS = { ActiveRound : <ActiveRound />,
//                  Intro: <Intro />,
//         }

let keeper = 'Intro'; 
// let component = PANELS[keeper];
let component = <Main user={props.user} />;

    return(
        <>
         <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
                <div className="app-container">
                    <div className = "app-half left-panel" > {component} </div>
                    <div className = "app-half right-panel" > <br/><button>GAME RULES</button><br/><br/><button>PRACTICE</button></div>
                </div>
            </ErrorBoundary>
          </Suspense>
        </>
    );
};