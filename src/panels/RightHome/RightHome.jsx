/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 parent: FlowFivePage
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
// import './.css';

export default function RightHome(props){

   
   function randomPlay()
    {
       console.log( "LOGEDOUT!!!!!"); 
       props.showPage("logout"); //TODO DEBUG WARNING: temp. change it 
    }

    function showRules()
    {
       props.showPage("ShowRules"); 
    }

    return (
    <>
        <br/>
        <button onClick={showRules}>GAME RULES</button>
        <br/><br/>
        <button onClick={randomPlay}>PRACTICE </button>
    </>
    );
};