/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, } from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import gameEngine from '../../utils/gameEngine.js';
import './Play.css';

export default function Practice(props){

//let newBoard = gameEngine.getShuffledBoard().slice() ; //TODO DEBUG, cause re-shuffle
let newBoard = [2,0,0,0 ,0,1,0,3 ,4,0,0,0 ,0,0,5,0];
let winnerCells = [];
let activePiece = 1;
const [board, setBoard] = useState( newBoard );
const [active, setActive] = useState( activePiece );
const [win, setWin ] = useState([]);

//-------------------------------------------
function shuffle()
{
    newBoard = gameEngine.getShuffledBoard().slice();
    setBoard( newBoard );
    setActive( gameEngine.getActivePiece() ); 
    setWin([]);
}
//-------------------------------------------
function pieceMovedTo( cellNo )
{   
    if(isNaN(win[0]))
    {
        newBoard = gameEngine.makeMove( cellNo );
        activePiece = gameEngine.getActivePiece();
        winnerCells = gameEngine.checkWin();
  
        setBoard( [...newBoard ] );
        setWin( [...winnerCells] );
        setActive( activePiece ); 
    }
}
//-------------------------------------------
function close(){
    props.showPage("RightHome");
}
//-------------------------------------------

    return (
    <>

        <GameBoard  board={board} 
                    activePiece={active} 
                    pieceMovedTo={pieceMovedTo} 
                    winners={win}       />
    </>
    );
};