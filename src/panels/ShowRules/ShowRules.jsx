/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './ShowRules.css';

export default function ShowRules(props){

function close() {
 props.showPage("","HomeRight"); 
}
    return (
    <div className="help-container scrollable">
        <img    src="ff-help1.jpg" 
                alt="PLAYING RULES" 
                className="help-image"
        />
        <close   className="close-icon large-icon" 
                onClick={close} />
    </div>
    );
};