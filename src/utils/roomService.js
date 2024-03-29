// socket is stablished in FlowFivePage.jsx and pass here as a function parameter
// 
import userService from "./userService";
import PROTO from "./proto";
const BASE_URL = '/api/rooms/';
//const ROOMPREFIX = "☺•";

//----------------------------------------
// function getRoomOwner( roomId ) {
    
// }

//----------------------------------------
// function getRoomId( uid ) {
    
// }

//----------------------------------------
function getOpenRooms(uid) {
   return apiGet('getRooms', {uid});
}

//----------------------------------------

//----------------------------------------
function join( uid, hid, socket ) {
  // console.log("Roomservice.join()--->", uid, hid, socket);

// send a socket join requst message to server
socket.emit("◙join", 
            { player: uid, 
              room:`r${PROTO.ROOMPREFIX}${hid}`,
            } );
if(uid !== hid) // call server to add user to room if it is not host
  apiPost('join', { uid, hid, } );

PROTO.xxx();  
}

//----------------------------------------
function leave(uid, hid, socket) {
// send a socket leave requst message to server
socket.emit("◙leave", 
            { player: uid, 
              room:`r${PROTO.ROOMPREFIX}${hid}`,
            } );
}

//----------------------------------------
function open( user, socket ) {
//console.log('MSK --> open room for ', uid);

join( user, user, socket ); // join user to his own room
apiPost('open' , {uid: user._id} ); // server: set room status to open
}

//----------------------------------------
function close( uid, socket ) {

leave( uid, uid, socket ); // kick out user from his own room
//console.log('MSK --> close room for ', uid.);
apiPost('close' , {uid} ); // server: kick out all guests and set room status to close
}
//----------------------------------------

//----------------------------------------
function message( roomId, socket ) {

}
// helper functions //-----------------------

function apiPost( route, data )
{
  console.log("APIpost FOR ", route, data);
 return fetch (BASE_URL + route , {
  method: 'POST',
  headers: new Headers({'Content-Type': 'application/json'}),
  body: JSON.stringify(data)
}) .then (res => {
  console.log("res --> ",res);
  return("POSTED");
  });
}
//-------------------------------------------
function apiGet( route, data )
{
  return fetch (BASE_URL + route , {
  method: 'POST',
  headers: new Headers({'Content-Type': 'application/json'}),
  body: JSON.stringify(data)
}) .then (res => {
  if (res.ok) 
      return res.json();
  console.log("ERROR: ", res[0]);
  });
}
//-------------------------------------------
export default {
  getOpenRooms,
  // getRoomOwner, 
  // getRoomId,
  join,   // user join a room
  leave,  // luser leave an open room
  open,   // owner open and join the room
  close,  // owner leave and close the room
  message,// send message from a user to a room
};