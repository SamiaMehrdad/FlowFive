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
                    ]
// let playground = [  0, 5, 3, 0, 
//                     2, 0, 0, 0,
//                     4, 0, 0, 0,
//                     0, 0, 0, 1 ]; //TODO DEBUG TEST
let playground = [  1, 0, 0, 0, 
                    0, 5, 0, 3,
                    0, 2, 4, 0,
                    0, 0, 0, 0 ]; //TODO DEBUG TEST

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
        for( let i=0; i!=cells.length; i++ )
            result[ cells[i] ] = 1;
        return result;
}

function getPlayground()
{
    return playground;
}

function getCellOf( piceNo )
{
    for(let i=0; i <= 16; i++ )
     if( playground[i] === pieceNo )
        return i;
}
export default {
    getPossibleMoves,
    getPlayground,
    getCellOf,
}   ;                 