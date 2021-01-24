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
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('userService--> Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}
//---------------------------------------
function checkEmail(email) {
  console.log("MSK HIT userService.checkEmail : ", email);
  return fetch(BASE_URL + 'checkEmail', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(email)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    console.log("MSK from userService POST: ", res);
    if (res.ok) 
        return res.json();

    throw new Error('Bad Email!');
  })
  .then((email) => {console.log("THIS EMAIL ***** ",email)});
}
//----------------------------------------
export default {
  signup, 
  getUser,
  logout,
  login,
  checkEmail,
};