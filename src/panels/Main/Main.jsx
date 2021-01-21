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

export default function Main(props){

    const testImages = ["./test.jpg" , "./test.jpg"]
    const testUser = { nikname: "Hayoola",
                        avatar: "./test.jpg",
                        rank: 50,
                     }
    return(
        <>
        <TitleDiv title="TitleDive test" width="95%">
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
         </LabelDiv>

         <p> This is outer p test </p>

        </TitleDiv>
        </>
    );
};