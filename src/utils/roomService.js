import userService from "./userService";
const BASE_URL = '/api/users/';

//----------------------------------------

export default {
  getRoomOwner, 
  getAll, // get all open rooms of my friends
  join,   // user join a room, owner admitted
  leave,  // leave an open room
  open,   // owner action
  close,  // owner action
  message,// 
};

//----------------------------------------
function getRoomOwner( roomId ) {
    
}

//----------------------------------------
function getRoomId( userId ) {
    
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

}

//----------------------------------------
function close( userId ) {

}
//----------------------------------------

//----------------------------------------
function message( roomId ) {

}