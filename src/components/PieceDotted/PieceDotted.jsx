/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';

import './PieceDotted.css';

export default function PieceDotted(props){

    return(
        <>
         { props.selected ?
            <div className="piece-face show selected">
             {'•'.repeat(props.n)}
            </div>
            :
           props.face? 
            <div className="piece-face show">
               {'•'.repeat(props.n)}
            </div>
            :
            <div className="piece-face hide" >o</div>
          }  
        </>
    );
};