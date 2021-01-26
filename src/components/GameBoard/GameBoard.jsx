/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useRef, useEffect } from 'react';
import PieceDotted from '../PieceDotted/PieceDotted';
import GameCell from '../GameCell/GameCell';
import gameEngine from '../../utils/gameEngine.js';
import './GameBoard.css';

    let highlights = [ ];
                    //     0, 0, 0, 0, 
                    //   0, 0, 0, 0,
                    //   0, 0, 0, 0,
                    //   0, 0, 0, 0 ];                  
    //-------------------
    function swap( arr, a, b )
    {
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    //--------------------                    
export default function GameBoard(props){

    let cells = [];
    let highlights = [];
    const [gameCells, setGameCells] = useState(cells);
    
   // const [hilights, setHilights] = useState(highlights);
   // const [selected, setSelected] = useState(0);
   let selected = 0;

useEffect( () => {
        makeCells();
       setGameCells( [...cells] ); //MSK : Trick to trigg react render for arrays
 
}, [props.board]);
//-----------------------------------------
    function makeCells ()
    {
        for( let i=0; i!=16; i++)
            cells[i] = (<GameCell   key={i} 
                                    cellClick={ cellClick } 
                                    id={i} piece={props.board[ i ]} 
                                    highlight={highlights[ i ]}
                                    selected={selected === i ? "true" : null}
                                    />)
    }
//-----------------------------------------
    function cellClick( n )
    {
       // console.log("CLICKED, HILITES ARE ", highlights );
       if(highlights[n] === 1 )
            props.pieceMovedTo(n);
       setGameCells( [...cells] ); //MSK : Trick to trigg react render for arrays
       
    }
//----------------------------------------
    selected = props.board.indexOf( props.activePiece );
    highlights = gameEngine.getPossibleMoves("TEST", selected , 5); //TODO: first and 3rd parameters are important just for TRADE mode
  //  console.log("in gameboard: BOARD : ", props.board);
  //  console.log("in gameboard: SELECTED CELL, HILIGT ARRAY",selected, highlights);
    makeCells();

//----------------------------------------
    return(
        <div className="gameboard">
            <div className="cell-container"  >
                {gameCells}
            </div>
        </div>
    );
};

