/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 parent: FlowFivePage
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
import PieceDotted from '../../components/PieceDotted/PieceDotted'
import GameBoard from '../../components/GameBoard/GameBoard'
// import './.css';

export default function RightHome(props){

   
   function randomPlay()
    {
       console.log( "PRACTICE!!!!!"); 
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
        <br/><br/>
         <GameBoard />
        <PieceDotted n="1" key="1" />
        <PieceDotted n="2" key="2" />
        <PieceDotted n="3" key="3" />
        <PieceDotted n="4" key="4" />
        <PieceDotted n="5" key="5" />
    </>
    );
};