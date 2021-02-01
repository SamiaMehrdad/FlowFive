/*---------------------------------
Custom react component.
 Component name: 
 Description: Main flowfive app dual screen navigator
 Props:  user
 Parent: App
Developped by: Mehrdad Samia - 2021
----------------------------------*/
import React, { lazy, useState } from 'react';
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



  //--- Main navigation process ------------------------------------------
  // use right and left state hooks + navigate function ( lifted state from children)
  // each children should lift up with shoePage( left , right )

    const [rightNav, setRightNav] = useState(<RightHome user={props.user} showPage={navigate} />);
    const [leftNav, setLeftNav] = useState(<Main user={props.user} showPage={navigate}/>);

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