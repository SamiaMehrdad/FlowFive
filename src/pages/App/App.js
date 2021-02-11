import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import FlowFivePage from '../FlowFivePage/FlowFivePage';
import userService from '../../utils/userService';
import roomService from '../../utils/roomService';

function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo
//-----------------------------------------
  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
    console.log('handleSignUpOrLogin--> user: ', user);
  }
//-----------------------------------------
  function handleLogout(){
    userService.logout();
    setUser( null );
    console.log("LOGGED OUT");
  }
//-----------------------------------------
 function getRoomOwner()
 {

 }
//-----------------------------------------
  return (
    <div className="App">
      <Switch>
          {/* <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route> */}
          <FlowFivePage user={user} 
                        handleLogout={handleLogout}
                        handleSignUpOrLogin={handleSignUpOrLogin}  
                        />
      </Switch>
    </div>
  );
}

export default App;