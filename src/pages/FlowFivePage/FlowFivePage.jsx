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

// const PAGES = ['ActiveRound',

//             ];

// let PS = [] ;

// function loadComponent(name) {
//   const Component = React.lazy(() =>
//     import (`../../panels/${name}/${name}`)
//   );
//   return Component;
// }
const PAGES= {
  ActiveRound: ActiveRound,
  GameBoard: GameBoard,
  Intro: Intro,
  Main:  Main,
  MakeInvitation: MakeInvitation,
  MySettings: MySettings ,
  Password: Password ,
  Practice: Practice,
  RightHome: RightHome,
  RoundWait: RoundWait,
  SetActive: SetActive,
  ShowRules: ShowRules,
  SignUp: SignUp,
  ViewInvitation: ViewInvitation,
};


export default function IntroPage(props){


//  PS.push( loadComponent ( PAGES[0]))
//  console.log(PS);

// const PANELS = { ActiveRound : <ActiveRound />,
//                  Intro: <Intro />,
//         }

//let keeper = 'Intro'; 
// let component = PANELS[keeper];
//let component = <Main user={props.user} />;

    const [rightNav, setRightNav] = useState(<RightHome user={props.user} showPage={rightNavigate} />);
    const [leftNav, setLeftNav] = useState(<ActiveRound user={props.user} showPage={leftNavigate}/>);

    function rightNavigate(page)
    {
      console.log( "TRY TO GO TO ", page);
      if(page === "logout")
        props.handleLogout();
      else 
      { 
        const Component = PAGES[ page ];
      //  console.log( "COMPONENT IS ---> ", React.Components[page]); 
       setRightNav( <Component user={props.user} showPage={rightNavigate} /> );
      }
    }

    function leftNavigate(page)
    {
      if(page === "logout")
        props.handleLogout();
      else 
      { 
      const Component = PAGES[ page ]; 
      setLeftNav( <Component user={props.user} showPage={leftNavigate} /> );
      }
    }


    return(
         <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
                <div className="app-container">
                    <div className = "app-half left-panel" > 
                     {leftNav} 
                    </div>
                    <div className = "app-half right-panel" >
                     {rightNav} 
                    </div>
                </div>
            </ErrorBoundary>
          </Suspense>
    );
};