/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: piece: piece number that this cell has - hilight: boolean
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
import PieceDotted from '../PieceDotted/PieceDotted';

import './GameCell.css';

export default function GameCell(props){

function clicked()
{
    props.cellClick(props.id);
}

        return(
            <div className="gamecell" 
                 onClick={clicked} 
                 style={ props.highlight? {backgroundColor: "rgba(100,80,30,.1)"}: null }
            >
                { 
                    props.piece? <PieceDotted n={props.piece} face="true" selected={props.selected} /> 
                    : <PieceDotted n={props.piece} /> 
                }
            </div>
    );
}