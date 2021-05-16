/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 parent: FlowFivePage
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import { Button } from 'semantic-ui-react';
import './HomeRight.css';

export default function HomeRight(props){

   
   function randomPlay()
    {
       props.showPage(null,"Practice");
    }

    function showRules()
    {
       props.showPage(null,"ShowRules"); 
    }

    return (
    <div id = "right-buttons">
      <Button content='GAME RULES' 
               icon='info' 
               labelPosition='left'
               onClick={showRules}   
               className="bt" />
      <Button content='PRACTICE' 
               icon='thumbs up' 
               labelPosition='left'
               onClick={randomPlay}   
               className="bt" />
    </div>
    );
};