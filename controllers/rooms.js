const User = require('../models/user');
const Room = require('../models/room');

module.exports = {
  getAll, // get all open rooms of my friends
  join,   // user join a room, owner admitted
  leave,  // leave an open room
  open,   // owner action
  close,  // owner action
  message,// 
};

//TODO: --------------------------

//-------------------------------
async function getAll(req, res)
{
  // first make a list of my friends
  //try {
 // const user = await User.findAll({email: req.body.email});
  console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);  
  try{

  } catch( err )
  {
    console.log("MSK Get all open rooms : --->", err);
    return res.status(401).json(err);
  }
}
//-------------------------------
function message(req, res)
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);
res.send({ response: "I am alive" }).status(200);
}

//----------------------------------
// Join to Round of a room, not to Room itself
//----------------------------------
function join(req, res)
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

//-------------------------------
function leave(req, res)
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);    
}

//---------------------------------------
// Start a new Round belongs to this Room
//---------------------------------------
 function open(req, res)
{
try {
    Room.updateOne({owner: req.body._id},{status: 'open'} ,{upsert: true, setDefaultsOnInsert: true},
    rm => { res.status(500)});

  } catch(err){
    console.log(err)
    return res.status(401).json(err);
  }
}

//---------------------------------------
// Close active Round belongs to this Room
// if there is no winner with Round, Round
// and associated moves will be deleted
//---------------------------------------
function close(req, res)
{
try {
    Room.updateOne({owner: req.body._id},{status: 'close'} ,{upsert: true, setDefaultsOnInsert: true},
    rm => { res.status(500)});

  } catch(err){
    console.log(err)
    return res.status(401).json(err);
  }
}