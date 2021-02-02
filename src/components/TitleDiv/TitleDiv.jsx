/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './TitleDiv.css';

export default function TitleDiv(props){

    return(
        <>
            <div className = "title-header"> 
            {props.title} 
            </div>
            <div className = "title-container scrollable" 
                style = {{width: props.width}} >
            {props.children}
            </div>
        </>
    );
};
