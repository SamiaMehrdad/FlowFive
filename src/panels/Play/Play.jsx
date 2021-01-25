/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
import PieceDotted from '../../components/PieceDotted/PieceDotted'
import GameBoard from '../../components/GameBoard/GameBoard'

import './Play.css';

export default function Play(props){


    return(
        <div >
            <GameBoard />
        </div>
    );
};