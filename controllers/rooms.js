const User = require('../models/user');
const Room = require('../models/room');

module.exports = {
  getOpenRooms, // get all open rooms of my friends
  join,   // user join a room, owner admitted
  leave,  // leave an open room
  open,   // owner action
  close,  // owner action
  message,// 
};



//-------------------------------
function message(req, res)
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);
res.send({ response: "I am alive" }).status(200);
}

//----------------------------------
// Get all unclosed rooms that belongs to user friends
//----------------------------------
async function getOpenRooms(req, res) {
  try{
    const friends = await User.find({_id: req.body.uid}, 'friends');
    console.log("Get open rooms...");
    const rooms = await Room.find( {owner: {$in: friends[0].friends}, status: { $nin: 'close' } } );
    // this got lots of time :-(
    // MongoDB will not return TODO
    // This is the way to make correct relation between room and owners in return
    let ownerIds = [];
    rooms.map( item => ownerIds.push(item.owner));

    const query = [
      {$match: {_id: {$in: ownerIds}}},
      {$addFields: {"__order": {$indexOfArray: [ownerIds, "$_id" ]}}},
      {$sort: {"__order": 1}}
    ];
    const owners = await User.aggregate(query);
    //------- end of trick by 
    // http://www.kamsky.org/stupid-tricks-with-mongodb/using-34-aggregation-to-return-documents-in-same-order-as-in-expression

    return res.json( { rooms, owners } );

  }catch(err){
    console.log("MSK getOpenRooms error : --->", err);
    return res.status(401).json(err);
  }
}
//----------------------------------
// Join to Round of a room, not to Room itself
//----------------------------------
function join(req, res)
{
 // const guestId = req.body.user._id;
  const guestId = req.body.uid;
 // const hostId = req.body.hostUser._id;
  const hostId = req.body.hid;
  console.log("****** "+guestId+" JOINED TO ROOM OF "+hostId);
 // console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);
 try{ 
 Room.updateOne({owner: hostId},
                {guests: guestId},
                {upsert: true, setDefaultsOnInsert: true},
                rm => { res.status(500)}
  );
 }catch(err){
  console.log(err)
  return res.status(401).json(err);
}

}

//-------------------------------
function leave(req, res)
{
console.log ("HIT FROM -------> function ", arguments.callee.toString().match(/function ([^\(]+)/)[1]);    
}

//---------------------------------------
// Set room status to 'open'
//---------------------------------------
 function open(req, res)
{
 // console.log("Opening room for Uid = ", req.body._id);
 // 
try {
    Room.updateOne({owner: req.body.uid},{status: 'open'} ,{upsert: true, setDefaultsOnInsert: true},
    rm => { res.status(500)});

  } catch(err){
    console.log(err)
    return res.status(401).json(err);
  }
}

//---------------------------------------
// Close open room belongs to this Room
//// if there is no winner with Round, Round
//// and associated moves will be deleted
//---------------------------------------
function close(req, res)
{
  // close room and empty guests array
try {
    Room.updateOne({owner: req.body.uid},{status: 'close', guests: null} ,{upsert: true, setDefaultsOnInsert: true},
    rm => { res.status(500)});

  } catch(err){
    console.log(err)
    return res.status(401).json(err);
  }
}
