/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import GameBoard from '../../components/GameBoard/GameBoard';
import gameEngine from '../../utils/gameEngine.js';
import './Practice.css';

export default function Practice(props){

//let newBoard = gameEngine.getShuffledBoard().slice() ; //TODO DEBUG, cause re-shuffle
//let newBoard = [2,0,0,0 ,0,1,0,0 ,0,3,4,0 ,0,0,5,0]; // Needs more attention to not to make strange behave
let newBoard = [0,0,0,0 ,0,0,0,0 ,0,0,0,0 ,0,0,0,0];
let winnerCells = [];
let activePiece = 0;

const [board, setBoard] = useState( newBoard );
const [active, setActive] = useState( gameEngine.getActivePiece() );
const [win, setWin ] = useState([]);
//console.log("Prctice started with board = ", board);
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
    props.showPage(null,"HomeRight");
}
//-------------------------------------------
    return (
    <div className="help-container">
         <p className="close-icon large-icon"  
            onClick={close} />
        <p id='tryLabel'
        >
            Prees button to restart 
        </p>    
        <Button circular
                icon='shuffle'
                onClick={shuffle}
                id="trybtn"   
                className="bt " />                
        <GameBoard  board={board} 
                    activePiece={active} 
                    pieceMovedTo={pieceMovedTo} 
                    winners={win}       
        />
    </div>
    );
};