/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
import './LabelDiv.css';

export default function LabelDiv(props){

    return(
        <div className="labeldiv" style= {{height: props.height, width: props.width? props.width: "95%"}}>
            <p className="labeldiv-title">{props.title}</p>
            <div className="labeldiv-inner scrollable" >
                {props.children}
            </div>
        </div>

    );
};