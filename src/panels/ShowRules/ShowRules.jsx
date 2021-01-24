/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './ShowRules.css';

export default function ShowRules(props){

function close() {
 props.showPage("RightHome"); //TODO IMPORTANT my magic not working! 
}
    return (
    <div className="help-container scrollable">
        <img src="ff-help1.jpg" alt="PLAYING RULS" className="help-image"/>
        <span id="back-right" 
              className="close-icon" 
              onClick={close}>
              X</span>
    </div>
    );
};