/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
import './TitleDiv.css';

export default function TitleDiv(props){

    return(
        <>
        <div className = "title-container scrollable" style = {{width: props.width}} >
            <div className = "title-header"> {props.title} </div>
            {props.children}
        </div>
        </>
    );
};

//TODO: bug: header should be fixed, it is scrolable now