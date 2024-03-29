/*---------------------------------
Custom react component.
 Component name: 
 Description: 
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './LabelDiv.css';

export default function LabelDiv(props){

    return(
        <div    className="labeldiv " 
                style= {{height: props.height, width: props.width? props.width: "95%"}}>
            <p      className="labeldiv-title">
            {props.title}
            </p>
            <div    className="labeldiv-inner blur scrollable" >
            {props.children}
            </div>
        </div>

    );
};