
//TODO: ==========================
module.exports = {
  getIvitings,
  getInviteds,  
  add,
  remove,
};

//-------------------------------
function add()
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

//-------------------------------
function remove()
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

//-------------------------------
function getIvitings()
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

//-------------------------------
function getInviteds()
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}