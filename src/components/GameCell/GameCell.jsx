/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: piece: piece number that this cell has - hilight: boolean
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import PieceDotted from '../PieceDotted/PieceDotted';

import './GameCell.css';

export default function GameCell(props){

//----------------------------------
function clicked()
{
    props.cellClick(props.id);
}
//----------------------------------
function setStyle()
{
 let style={};
 if( props.winner )
    style = {backgroundColor: "var(--green)"};
 else
    props.highlight? style ={backgroundColor: "rgba(100,100,0,.2)", cursor: "pointer"}: style = null;
 return style;   
}
//----------------------------------
        return(
            <div className="gamecell" 
                 onClick={clicked} 
                 style={ setStyle() } >
                { 
                    props.piece? <PieceDotted n={props.piece} face="true" selected={props.selected} /> 
                    : <PieceDotted n={props.piece} /> 
                }
            </div>
    );
}