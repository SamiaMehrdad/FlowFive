import tokenService from './tokenService';

const BASE_URL = '/api/users/';
//----------------------------
function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  // Parameter destructuring!
  .then(({token}) => tokenService.setToken(token));
  // The above could have been written as
  //.then((token) => token.token);
}
//----------------------------------------
function getUser() {
  return tokenService.getUserFromToken();
}
//-----------------------------------------
function logout() {
  tokenService.removeToken();
}
//-----------------------------------------
function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
   // console.log(TS,"2- JWT recieved from server for ", creds)
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('userService--> Wrong Password');
  })
  .then(({token}) => { 
    tokenService.setToken(token);
    localStorage.removeItem('tempUser');
   // console.log(TS,"2- JWT recieved and set: ", token)
  });
}
//---------------------------------------
async function checkEmail(email) {
  let check = await fetch(BASE_URL + 'checkEmail', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(email)
  });
  return check ;
}

//---------------------------------------
function getFriends(user) {
    return fetch(BASE_URL + 'getFriends', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify({uid: user._id})
  })
  .then( res => {
    //console.log(Date.now(),"THEN RES = ", res);
    if (res.ok) 
      return res.json();
    console.log("ERROR: ", res[0]);
  }) 
}

//----------------------------------------
function searchUsers(partial) {
  
  //console.log("Serching letters = ",partial) ;

  return fetch(BASE_URL + 'searchUsers', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify({partial: partial})
  })
  .then( res => {
      
    //console.log(Date.now(),"THEN RES = ", res);
    if (res.ok) 
      return res.json();
    console.log("ERROR: ", res[0]);
  })

}

//----------------------------------------
function setTempUser() {
  return fetch(BASE_URL + 'setTempUser', {
    method: 'GET',
    headers: new Headers({'Content-Type': 'application/json'}),
  })
  .then( res => {
    //console.log(Date.now(),"THEN RES = ", res);
    if (res.ok) 
      return res.json();
    console.log("ERROR: ", res[0]);
  })
}
//----------------------------------------
function  addFriend( fid ){
  return fetch(BASE_URL + 'addFriend', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify({uid: getUser()._id, fid: fid})
  })
  .then( res => {
    if (res.ok) 
      return res.json();
    console.log("ERROR: ", res[0]);
  })  
  
}
//----------------------------------------
function removeFriend( fid ){
  return fetch(BASE_URL + 'removeFriend', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify({uid: getUser()._id, fid: fid})
  })
  .then( res => {
      
    //console.log(Date.now(),"THEN RES = ", res);
    if (res.ok) 
      return res.json();
    console.log("ERROR: ", res[0]);
  })
}
//----------------------------------------

export default {
  signup, 
  getUser,
  logout,
  login,
  checkEmail,
  getFriends,
  searchUsers,
  setTempUser,
  addFriend,
  removeFriend,
};