/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 Parent: FlowFivePage
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
// import './.css';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import InviteBar from '../../components/InviteBar/InviteBar';
import GuestBar from '../../components/GuestBar/GuestBar';
import WaitingPlayer from '../../components/WaitingPlayer/WaitingPlayer'
import TimerBar from '../../components/TimerBar1/TimerBar1'

export default function Main(props){

    const testImages = ["./test.jpg" , "./test.jpg"]
    const testUser = { nikname: "Hayoola",
                        avatar: "test.jpg",
                        rank: 50,
                        chat: "This is a chat message with 100 characters, and again, This is a chat message with some characters !"
                     }
    const testUser2 = { nikname: "Hayoola2",
                avatar: "test.jpg",
                rank: 50,
                chat: "And another chat message but a little shorter !"
                }   

        const [user2, setUser2] = useState( testUser2 );

        function clickNewMessage()
        {
            setUser2({...testUser2, chat: "This is new message"});
        }

    return(
        <>

        <LabelDiv title='CHAT BOX' >
            <input />
        </LabelDiv>
        <TimerBar user={testUser} />
        <WaitingPlayer user={testUser} />
        <WaitingPlayer user={user2} />
        <br/><br/>
        <button onClick = {clickNewMessage} > CHANGE </button>
        {/* <span>{user2.chat}</span> */}
                {/* <TitleDiv title="TitleDive test" width="95%">
        { props.user?
            <p> {props.user.email} Logged in! </p>
            :
            <p>User not defined!</p>
        }
         <p> This is outer p test </p>
         <LabelDiv title='Label test' >
            <p> This is inner p test </p>
            <GuestBar user={testUser} />
         </LabelDiv>

         <LabelDiv title='Label2' >
            <InviteBar 
              message="This is message from parent" 
              avatars = {testImages}
              />
            <InviteBar message="Come and play with us." />
            <InviteBar message="Come and play with us." />
         </LabelDiv>

         <p> This is outer p test </p>

        </TitleDiv> */}
        </>
    );
};