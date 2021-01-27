/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './CheckBox.css';

export default function CheckBox(props){

    return(
        <div className="check-container" >
            <input type="checkbox" className="check"></input>
            <span className="check-label">{props.title}</span>
        </div>
    );
};