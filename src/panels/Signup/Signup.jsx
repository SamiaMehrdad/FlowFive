/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/
import React, {useState, useRef, useEffect } from 'react';
import './Signup.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useForm } from '../../hooks/useForm';
import userService from '../../utils/userService';
import TitleDiv from '../../components/TitleDiv/TitleDiv';

export default function SignUpPage(props){
    const [invalidForm, setValidForm] = useState(false);
    const [state, handleChange]       = useForm({
        username: '',
        email: props.temp.email,
        password: '',
        passwordConf: ''    
    });
   

    const formRef = useRef();

    useEffect(() => {
      formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);

    });



    return (

        <TitleDiv title="SIGN UP" >

          <form  autoComplete="off" ref={formRef} onSubmit={async (e) => {
            e.preventDefault()
            //console.log(state, ' this is state')
            try {
                await userService.signup(state);
                // Route to wherever you want!
               // alert("You're logged in! Time to Code where you want to go Now! ~ SignupComponent")
               
             //  console.log( 'USER CREATED :', state);
               props.showPage("HomeLeft","HomeRight");
              } catch (err) {
                // Invalid user data (probably duplicate email)
                console.log(err.message)
              }
          }}>
            {/* <div className="form-group">
              <input
                className="form-control"
                name="username"
                placeholder="username"
                value={state.username}
                onChange={handleChange}
                required
              />
            </div> */}

              <input
                type="email"
                className="signup-input"
                name="email"
                // placeholder="email"
                value={ state.email}
                onChange={handleChange}
                required
              />
              <input
                className="signup-input"
                name="password"
                type="password"
                placeholder="Set a password"
                value={ state.password}
                onChange={handleChange}
                required
              />
              <input
                className="signup-input"
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                value={ state.passwordConf}
                onChange={handleChange}
                required
              />
            <br />
            <button
              type="submit"
              disabled={invalidForm}
            >
              SIGN ME UP
            </button>
          </form>

  </TitleDiv>

      );
}
