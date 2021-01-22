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

export default function Main(props){

    const testImages = ["./test.jpg" , "./test.jpg"]
    const testUser = { nikname: "Hayoola",
                        avatar: "./test.jpg",
                        rank: 50,
                        chat: "This is a chat message with 100 characters, and again, This is a chat message with some characters !"
                     }
             

    return(
        <>
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
        <br /><br /><br />
        <WaitingPlayer user={testUser} />
        <WaitingPlayer user={testUser} />
        </>
    );
};