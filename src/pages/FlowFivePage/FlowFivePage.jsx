/*---------------------------------
Custom react component.
 Component name: 
 Description: Main flowfive app dual screen navigator
 Props:  user
 Parent: App
Developped by: Mehrdad Samia - 2021
----------------------------------*/
import React, { useState } from 'react';
import ActiveRound from '../../panels/ActiveRound/ActiveRound';
import Intro from "../../panels/Intro/Intro";
import Main from "../../panels/Main/Main";
import MakeInvitation from "../../panels/MakeInvitation/MakeInvitation";
import MySettings from "../../panels/MySettings/MySettings";
import Password from "../../panels/Password/Password";
import Practice from "../../panels/Practice/Practice";
import Play from "../../panels/Play/Play";
import RightHome from "../../panels/RightHome/RightHome";
import RoundWait from "../../panels/RoundWait/RoundWait";
import SetActive from "../../panels/SetActive/SetActive";
import ShowRules from "../../panels/ShowRules/ShowRules";
import SignUp from "../../panels/Signup/Signup";
import ViewInvitation from "../../panels/ViewInvitation/ViewInvitation";


import './FlowFivePage.css';


const PAGES= {
  ActiveRound: ActiveRound ,
  Intro: Intro ,
  Main:  Main ,
  MakeInvitation: MakeInvitation ,
  MySettings: MySettings ,
  Password: Password ,
  Practice: Practice ,
  Play: Play,
  RightHome: RightHome ,
  RoundWait: RoundWait ,
  SetActive: SetActive ,
  ShowRules: ShowRules ,
  SignUp: SignUp ,
  ViewInvitation: ViewInvitation ,
};


export default function IntroPage(props){

    const [rightNav, setRightNav] = useState(<RightHome user={props.user} showPage={navigate} />);
    const [leftNav, setLeftNav] = useState(<Main user={props.user} showPage={navigate}/>);
// //--------------------------------------------
//     function rightNavigate(page)
//     {
//       console.log( "RIGHT PANEL GO TO ", page);
//       if(page === "logout")
//         props.handleLogout();
//       else 
//       { 
//         const Component = PAGES[ page ]; 
//         setRightNav( <Component user={props.user} showPage={rightNavigate} /> );
//       }
//     }
//--------------------------------------------
    // function leftNavigate(page)
    // {
    //   let target = page;
    //   if(target === "logout")
    //     props.handleLogout();
    //   else 
    //   { 
    //     if(target === "quitGame")
    //       {
    //         rightNavigate( "RightHome" );
    //         target = "Main";
    //       }

    //       const Component = PAGES[ target ]; 
    //       setLeftNav( <Component user={props.user} showPage={leftNavigate} /> );
    //       if ( Component == PAGES.ActiveRound )
    //            rightNavigate( 'Play' );

    //   }
    // }

//------------------------------------------
  function navigate( left, right )
  {
    let Component = null;
    if(left)
    {
        if(left === "logout"){
            props.handleLogout();}
        Component = PAGES[ left ]; 
        setLeftNav( <Component user={props.user} showPage={navigate} /> );
    }
    if( right )
    {
        Component = PAGES[ right ]; 
        setRightNav( <Component user={props.user} showPage={navigate} /> )
    }
  }
//--------------------------------------------
    return(
      <>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
            {/* <ErrorBoundary> */}
                <div className="app-container">
                    <div className = "app-half left-panel" > 
                     {leftNav} 
                    </div>
                    <div className = "app-half right-panel" >
                     {rightNav} 
                    </div>
                </div>
            {/* </ErrorBoundary> */}
           {/* </Suspense> */}
     </>
    );
};