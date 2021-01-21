/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
// import './.css';
import TitleDiv from '../../components/TitleDiv/TitleDiv';

export default function ActiveRound(props){

    return(
        <TitleDiv title="THIS IS A TEST" width="90%">
            <h1>TEST</h1>
            <p>From ActiveRound, Hi.</p>
        </TitleDiv>
    );
};