/*---------------------------------
Custom react component.
 Component name: 
 Description: Main FlowFive app dual screen navigator
 Props:  user
 Parent: App
Developed by: Mehrdad Samia - 2021
----------------------------------*/
import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import publicIp from 'public-ip';
//import userService from '../../utils/userService'
/// import all PAGE components 
import ActiveRound from '../../panels/ActiveRound/ActiveRound';
import GetEmail from "../../panels/GetEmail/GetEmail";
import GetPassword from "../../panels/GetPassword/GetPassword";
import HomeLeft from "../../panels/HomeLeft/HomeLeft";
import HomeRight from "../../panels/HomeRight/HomeRight";
import JoinPlayRoom from "../../panels/JoinPlayRoom/JoinPlayRoom";
import MakeInvitation from "../../panels/MakeInvitation/MakeInvitation";
import MyPlayRoom from "../../panels/MyPlayRoom/MyPlayRoom";
import MySettings from "../../panels/MySettings/MySettings";
import Practice from "../../panels/Practice/Practice";
import Play from "../../panels/Play/Play";
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
  JoinPlayRoom: JoinPlayRoom ,
  MakeInvitation: MakeInvitation ,
  MyPlayRoom: MyPlayRoom ,
  MySettings: MySettings ,
  Practice: Practice ,
  Play: Play,
  Signup: Signup ,
  SignupInfo: SignupInfo ,
  SetActive: SetActive ,
  ShowRules: ShowRules ,
  ViewInvitation: ViewInvitation ,
};

// const ROOMPREFIX = "☺•";
const socket = io()

export default function FlowFivePage(props){

  // study test for IPs
  // it should be used in try-catch because of frequent errors
//  (async () => {
// 	console.log(await publicIp.v4());
// 	//=> '46.5.21.123'
// })();

  //--- Socket.io ------------------
  const [ioMessage, setIoMessage] = useState("");
  //const [ioName, setIoName] = useState("testUser");

  // const [room, setRoom] = useState("testRoom");

  // useEffect(() => {
    
    // console.log("SOCKET INIT : ", socket);
    // if ( props.user )
    //   socket.emit("◙join", {player: props.user._id, room: `r${ROOMPREFIX}${props.user._id}`}); // test. 47:34 https://www.youtube.com/watch?v=ZwFA3YMfkoc

    // socket.on("FromAPI", data =>{
    //   setIoMessage( data );
    // });


    // return () => {
      // cleanup
      // socket.emit("◙disconnect");
      // socket.off();
    // }
  // }, []);

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
                                            showPage={showPage}
                                            socket={socket} />
                                            :
                                            <GetEmail
                                            showPage={showPage} />
                                            );

//------------------------------------------
// Check if given email is registered before, go for getting password
// Otherwise go for signup page

  function showPage( left, right, temp )
  {
    let Component = null;
    if(left)
    {
        Component = PAGES[ left ]; 
     //   console.log(Date.now(),"Left to --->", left, props.user);
        setLeftNav( <Component user={props.user} 
                                showPage={showPage} 
                                temp={temp} 
                                handleLogout={props.handleLogout} 
                                handleSignUpOrLogin={props.handleSignUpOrLogin}
                                socket={socket}
                                /> );
    }
    if( right )
    {
        Component = PAGES[ right ];
     //   console.log(Date.now(),"Right to --->", right); 
        setRightNav( <Component user={props.user} 
                                showPage={showPage} 
                                temp={temp}
                                handleLogout={props.handleLogout}  
                                handleSignUpOrLogin={props.handleSignUpOrLogin}
                                socket={socket}   
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