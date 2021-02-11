/*---------------------------------
Custom react component.
 Component name: 
 Description: Main FlowFive app dual screen navigator
 Props:  user
 Parent: App
Developed by: Mehrdad Samia - 2021
----------------------------------*/
import React, { useState } from 'react';
//import userService from '../../utils/userService'

import ActiveRound from '../../panels/ActiveRound/ActiveRound';
import GetEmail from "../../panels/GetEmail/GetEmail";
import GetPassword from "../../panels/GetPassword/GetPassword";
import HomeLeft from "../../panels/HomeLeft/HomeLeft";
import HomeRight from "../../panels/HomeRight/HomeRight";
import MakeInvitation from "../../panels/MakeInvitation/MakeInvitation";
import MySettings from "../../panels/MySettings/MySettings";
import Practice from "../../panels/Practice/Practice";
import Play from "../../panels/Play/Play";
import PlayRoom from "../../panels/PlayRoom/PlayRoom";
import Signup from "../../panels/Signup/Signup";
import SignupInfo from "../../panels/SignupInfo/SignupInfo";
import SetActive from "../../panels/SetActive/SetActive";
import ShowRules from "../../panels/ShowRules/ShowRules";
import ViewInvitation from "../../panels/ViewInvitation/ViewInvitation";


import './FlowFivePage.css';

const PAGES= {
  ActiveRound: ActiveRound ,
  GetEmail: GetEmail,
  GetPassword: GetPassword ,
  HomeLeft:  HomeLeft ,
  HomeRight: HomeRight ,
  MakeInvitation: MakeInvitation ,
  MySettings: MySettings ,
  Practice: Practice ,
  Play: Play,
  PlayRoom: PlayRoom ,
  Signup: Signup ,
  SignupInfo: SignupInfo ,
  SetActive: SetActive ,
  ShowRules: ShowRules ,
  ViewInvitation: ViewInvitation ,
};


export default function FlowFivePage(props){

console.log( "FlowFivePage runs with props = ", props);

  //--- Main navigation process ------------------------------------------
  // use right and left state hooks + navigate function ( lifted state from children)
  // each children should lift up with shoePage( left , right )

    const [rightNav, setRightNav] = useState(<HomeRight 
                                              user={props.user} 
                                              showPage={showPage} />
                                            );
                                                                                   
    const [leftNav, setLeftNav] = useState( props.user ?
                                            <HomeLeft 
                                            user={props.user} 
                                            showPage={showPage}/>
                                            :
                                            <GetEmail
                                            showPage={showPage} />
                                            );

//------------------------------------------
// Check if given email is registered before, go for getting password
// Otherwise go for signup page

//------------------------------------------
  function showPage( left, right, temp )
  {
    let Component = null;
    if(left)
    {
        Component = PAGES[ left ]; 
      //  console.log(Date.now(),"Left to --->", left);
        setLeftNav( <Component user={props.user} 
                                showPage={showPage} 
                                temp={temp} 
                                handleLogout={props.handleLogout} 
                                handleSignUpOrLogin={props.handleSignUpOrLogin} 
                                //owner={props.owner} 
                                /> );
    }
    if( right )
    {
        Component = PAGES[ right ];
      //  console.log(Date.now(),"Right to --->", right); 
        setRightNav( <Component user={props.user} 
                                showPage={showPage} 
                                temp={temp}
                                handleLogout={props.handleLogout}  
                                handleSignUpOrLogin={props.handleSignUpOrLogin}
                                //owner={props.owner}  
                                /> );
    }
  }
//--------------------------------------------
    return(
            <div className="app-container">
                <div className = "app-half left-panel" > 
                  {leftNav} 
                </div>
                <div className = "app-half right-panel" >
                  {rightNav} 
                </div>
            </div>
    );
};