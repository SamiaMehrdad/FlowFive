
module.exports = {
  join,
  leave,
  create,
  remove,
};

//TODO: --------------------------

//-------------------------------
function join()
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

//-------------------------------
function leave()
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);    
}

//-------------------------------
function create()
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);    
}

//-------------------------------
function remove()
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);    
}