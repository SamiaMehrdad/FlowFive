/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import './MySettings.css';

export default function MySettings(props){

function close()
{
    props.showPage("HomeLeft");
}

function logout()
{
    props.handleLogout();
    props.showPage("GetEmail","HomeRight");
}
    return (
    <TitleDiv title="DASHBOARD">
        <br />
        <img    id="my-image" 
                className='prof-image loadable' 
                src="./test.jpg" 
                alt="Avatar" />
        <span   id="prof-nick" 
                className="main-userinfo editable">
        Nick Name
        </span>
        <button className="security-btn">
        SECURITY
        </button>
        <LabelDiv   className="friends" 
                    title="FRIENDS" 
                    height="80%">
        </LabelDiv>    
        <div className="bottom-stick">
            <button onClick={close} >
            CLOSE
            </button>
            <button onClick={ logout } >
            LOG OUT !
            </button>
        </div>
    </TitleDiv>
    );

};