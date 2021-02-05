/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 parent: FlowFivePage
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './HomeRight.css';

export default function HomeRight(props){

   
   function randomPlay()
    {
       props.showPage("","Practice");
    }

    function showRules()
    {
       props.showPage("","ShowRules"); 
    }

    return (
    <div id = "right-buttons">

        <button   onClick={showRules} >
        GAME RULES
        </button>
        <br/>
        <br/>
        <button   onClick={randomPlay} >
        PRACTICE 
        </button>
    </div>
    );
};