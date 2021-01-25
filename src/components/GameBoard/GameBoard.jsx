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


    let positions = gameEngine.getPlayground();

    let highlights = [ 0, 0, 0, 0, 
                      0, 0, 0, 0,
                      0, 0, 0, 0,
                      0, 0, 0, 0 ];                  
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

//-----------------------------------------
    function makeCells ()
    {
        for( let i=0; i!=16; i++)
            cells[i] = (<GameCell   key={i} 
                                    cellClick={ cellClick } 
                                    id={i} piece={positions[ i ]} 
                                    highlight={highlights[ i ]}
                                    selected={selected === i ? "true" : null}
                                    />)
    }
//-----------------------------------------
    function cellClick( n )
    {
       selected = n;
       highlights = gameEngine.getPossibleMoves("TEST", n , 5);
       makeCells();
       setGameCells( [...cells] ); //MSK : Trick to trigg react render for arrays
       //setHilights([...highlights]);
       console.log(selected," Is selected");
    }
//----------------------------------------
    highlights = gameEngine.getPossibleMoves("TEST", selected , 5);
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

// interesting from my old embded C code
/*
byte chareCheckPossibleMove ()         
{
	byte var1 = sysCurrentKey - ChareSelectIndex;
	byte var2 = var1 * ( -1 ) ;
	
	if ( checkCell ( sysCurrentKey ) != Off )
		return false;
	if( ( var1 ) != 5 )
		if( ( var2  ) != 5 )
				if( ( var1 ) != 4 )
					if( ( var2  ) != 4 )
						if( ( var1 ) != 3 )
							if( ( var2  ) != 3 )
								if( ( var1 ) != 1 )
									if( ( var2  ) != 1 )
										return false;
	return true;      
}
*/