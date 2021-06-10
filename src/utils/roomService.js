import userService from "./userService";
const BASE_URL = '/api/rooms/';
const ROOMPREFIX = "☺•";

//----------------------------------------
function getRoomOwner( roomId ) {
    
}

//----------------------------------------
function getRoomId( userId ) {
    
}

//----------------------------------------
function getOpenRooms(uid) {
   return apiGet('getRooms', {uid});
  // return fetch(BASE_URL + 'getRooms', {
  //   method: 'POST',
  //   headers: new Headers({'Content-Type': 'application/json'}),
  //   body: JSON.stringify({uid})
  // })
  // .then( res => {
  //   if (res.ok) 
  //     return res.json();
  //   console.log("ERROR: ", res[0]);
  // }) 
}
//----------------------------------------
function getAll( userId ) {

    return fetch (BASE_URL + 'getAll' , {
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(userId)
    }) .then (res => {
        console.log("res --> ",res.jason());
        });
}
//----------------------------------------
function join( roomId ) {

}

//----------------------------------------
function leave() {

}

//----------------------------------------
function open( user, socket ) {
//console.log('MSK --> open room for ', uid);
socket.emit("◙join", {player: user._id, room:`r${ROOMPREFIX}${user._id}`});
apiPost('open' , user );
}

//----------------------------------------
function close( user, socket ) {
socket.emit("◙leave", {player: user._id, room:`r${ROOMPREFIX}${user._id}`});
// socket.off(); 
//console.log('MSK --> close room for ', userId.);
apiPost('close' , user );
}
//----------------------------------------

//----------------------------------------
function message( roomId ) {

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
  getRoomOwner, 
  getRoomId,
  getAll, // get all open rooms of my friends
  join,   // user join a room, owner admitted
  leave,  // leave an open room
  open,   // owner action
  close,  // owner action
  message,// 
};