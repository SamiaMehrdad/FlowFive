 const NEIGHBOR = [ [ 1,4,5 ] ,
                    [0,2,4,5,6],
                    [1,3,5,6,7],
                    [2,6,7],
                    [0,1,5,8,9],
                    [0,1,2,4,6,8,9,10],
                    [1,2,3,5,7,9,10,11],
                    [2,3,6,10,11],
                    [4,5,9,12,13],
                    [4,5,6,8,10,12,13,14],
                    [5,6,7,9,11,13,14,15],
                    [6,7,10,14,15],
                    [8,9,13],
                    [8,9,10,12,14],
                    [9,10,11,13,15],
                    [10,11,14],
                    ];

 const WINSITS = [  [0,1,4,5],
                    [1,2,5,6],
                    [2,3,6,7],
                    [4,5,8,9],
                    [5,6,9,10],
                    [6,7,10,11],
                    [8,9,12,13],
                    [9,10,13,14],
                    [10,11,14,15],
//h lines
                    [0,1,2,3],
                    [4,5,6,7],
                    [8,9,10,11],
                    [12,13,14,15],
// v lines
                    [0,4,8,12],
                    [1,5,9,13],
                    [2,6,10,14],
                    [3,7,11,15],
// axes
                    [0,5,10,15],
                    [3,6,9,12],
                ];

let playground = [  1, 0, 0, 0, 
                    0, 5, 0, 3,
                    0, 2, 4, 0,
                    0, 0, 0, 0 ]; //TODO DEBUG TEST
let activePiece = 1;
//-----------------------------------------
let globalTimeFlag = false;

 setInterval(() => {
   globalTimeFlag = ! globalTimeFlag;
 }, 250);

//-----------------------------------------
 function getTimeFlag()
 {
     return globalTimeFlag;
 }
//-----------------------------------------
function getPossibleMoves( mode, cell, pieceNo )
{
    let result = Array(16).fill(0);
    let cells = [];
    let neighbors = NEIGHBOR[ cell ]

    for( let i=0; i <  neighbors.length; i++ )
    {
        if(playground[neighbors[i]] === 0 )
            cells.push(neighbors[i]);
        // if (mode ==="TRADE")
        // {
        //     if( Math.abs( pieceNo - playground[ neighbors[i]]) >1 ) //TODO: solve the logic for TRADE mode
        // } 
    }
        for( let i=0; i !== cells.length; i++ )
            result[ cells[i] ] = 1;
        return result;
}
//---------------------- interesting from my old embded C code
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
//-----------------------------------------
function getPlayground()
{
    return playground;
}

//-----------------------------------------
function getCellOf( pieceNo )
{

    return playground.indexOf( pieceNo );
}

//-----------------------------------------
function putPiece( cell, pieceNo )
{
    playground[ cell ] = pieceNo;
}

//-----------------------------------------
function emptyCell( cell )
{
    playground[ cell ] = 0;
}

//-----------------------------------------
function getShuffledBoard()
{
    
    do{
        playground = Array(16).fill(0);
        for( let i=1; i < 6; i++ )
        {
            let rnd = 0;
            do{
                rnd = Math.floor(Math.random() * 16);
            }while( playground[ rnd ] !== 0 );
            playground[rnd] = i;
        }
        console.log("!!!! SHUFFLE !!!!", checkWin().length);
      } while( checkWin().length);  
    
    activePiece = 1; // 1 reset game
    return playground;
}
//-----------------------------------------
function matchAtLeast( cells )
{
  for( let cell of cells )
  {
      if( playground[cell] === 0 )
        return false;
  }
  return true;
}
//-----------------------------------------
function checkWin()
{ //TODO IMPORTANT cell 0 problem in win detecting
    for( const pair of WINSITS ) 
    {
        if( matchAtLeast(pair))
            return pair;
    }
    return [];
}
//-----------------------------------------
function getActivePiece()
{
    return activePiece;
}

//----------------------------------------
// usafe function: should be called after checking
// validation of move
// this function swaps position of active cell and given cell,
// update active piece number and return new playground
//---------------------------------------
function makeMove( cellNo )
{

    let activeCell = playground.indexOf(activePiece);

    // swap pieces of activeCell and cellNo
   // [playground[activeCell], playground[cellNo]] = [playground[cellNo], playground[activeCell]];
    let temp = playground[ cellNo ];
    playground[ cellNo ] = playground[ activeCell ];
    playground[ activeCell ] = temp;

    // increase activePece
    activePiece = activePiece === 5? 1 : activePiece+1 ;

    // return new playground
    return playground;
}
//-----------------------------------------
export default {
    getPossibleMoves, // returns an array of cell numbers
    getPlayground,// get whole playground array
    getCellOf,//getCellOf( pieceNo )
    putPiece, //putPiece( cell, pieceNo )
    emptyCell,
    getShuffledBoard,// shuffle playground and set activePiece to 1
    getTimeFlag,
    checkWin, // return array of four or false
    getActivePiece,
    makeMove,
}   ;                 