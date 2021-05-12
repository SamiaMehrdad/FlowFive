import userService from "./userService";
const BASE_URL = '/api/rooms/';


//----------------------------------------
function getRoomOwner( roomId ) {
    
}

//----------------------------------------
function getRoomId( userId ) {
    
}

//----------------------------------------
function getOpenRooms(uid) {
  apiPost('getRooms', {uid});
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
function open( userId ) {
//console.log('MSK --> open room for ', userId);
apiPost('open' , userId );
}

//----------------------------------------
function close( userId ) {
//console.log('MSK --> close room for ', userId.);
apiPost('close' , userId );
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
   fetch (BASE_URL + route , {
  method: 'POST',
  headers: new Headers({'Content-Type': 'application/json'}),
  body: JSON.stringify(data)
}) .then (res => {
  console.log("res --> ",res);
  return res;
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