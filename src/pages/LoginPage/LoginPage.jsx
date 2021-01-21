import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import userService from '../../utils/userService';

export default function LoginPage(props){

    const [invalidForm, setValidForm] = useState(false);
    const [error, setError ]          = useState('');
    const [state, setState]       = useState({
        email: '',
        pw: '',
    });
  
    const history = useHistory();
    
    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
   
    async function handleSubmit(e){
      e.preventDefault()
              
      try {
          await userService.login(state);
          // Route to wherever you want!
          props.handleSignUpOrLogin() // 
          history.push('/')
          
        } catch (err) {
          // Invalid user data (probably duplicate email)
          setError(err.message)
        }
    }

    return (
        <>
        <div id="test">
          <h1>Login</h1>
          <form  autoComplete="off" onSubmit={handleSubmit} >
            
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email"
                value={ state.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="pw"
                type="password"
                placeholder="password"
                value={ state.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={invalidForm}
            >
              Login
            </button>
          </form>

          {error ? <ErrorMessage error={error} /> : null}
          </div>
        </>
      );
}

