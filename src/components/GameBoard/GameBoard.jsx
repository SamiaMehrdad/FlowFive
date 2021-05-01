/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useEffect } from 'react';
import GameCell from '../GameCell/GameCell';
import gameEngine from '../../utils/gameEngine.js';
import './GameBoard.css';

           
    //--------------------                    
export default function GameBoard(props){

    let cells = [];
    let highlights = [];
    const [gameCells, setGameCells] = useState(cells);
    let selected = 0;

useEffect( () => 
    {
        makeCells();
        setGameCells( [...cells] ); //MSK : Trick to trigger react render for arrays

    }, [props.board]);
//-----------------------------------------
    function makeCells ()
    {
        if ( !isNaN(props.winners[0]) )
        {
            for( let i=0; i < 16; i++)
            {
                cells[i] = (<GameCell   key={i} 
                                        id={i} 
                                        piece={props.board[ i ]}
                                        cellClick={ cellClick } 
                                        winner={props.winners.indexOf(i) >= 0? "true" : null }
                                        />)
            }
        }
        else
            for( let i=0; i < 16; i++)
            {
                cells[i] = (<GameCell   key={i} 
                                        id={i} 
                                        piece={props.board[ i ]}
                                        cellClick={ cellClick } 
                                        highlight={highlights[ i ]}
                                        selected={selected === i ? "true" : null}
                                        />)
            }
    }
//-----------------------------------------
    function cellClick( n )
    {
       if(highlights[n] === 1 )
            props.pieceMovedTo(n);
       setGameCells( [...cells] ); //MSK : Trick to trigger react render for arrays
       
    }
//----------------------------------------
    selected = props.board.indexOf( props.activePiece );
    highlights = gameEngine.getPossibleMoves("TEST", selected , 5); //TODO: first and 3rd parameters are important just for TRADE mode

//----------------------------------------
    return(
        <div className="gameboard">
             {/* <div className="cell-container"  > */}
            {gameCells}
            {/* </div> */}
            <p className="bindex">1234</p>
            <p className="bindex" id="bott-index">1234</p>
            <div className="bindex side" id="left-index">A B C D</div>
            <div className="bindex side" id="right-index">A B C D</div>
        </div>
    );
};

