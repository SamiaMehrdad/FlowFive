/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React , {useRef} from 'react';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import TitleDiv from '../../components/TitleDiv/TitleDiv';
import './MySettings.css';

export default function MySettings(props){

    const inputFile = useRef(null);

function close()
{
    props.showPage("HomeLeft");
}

function logout()
{
    props.handleLogout();
    props.showPage("GetEmail","HomeRight");
}
function imageClick()
{
    inputFile.current.click(); 
}
    return (
    <TitleDiv title="DASHBOARD">
        <br />
        <input type='file' 
               id='file' 
               ref={inputFile} 
               style={{display: 'none'}}/>

        <img    id="my-image" 
                className='prof-image loadable' 
                src="./test.jpg"
                onClick={imageClick} 
                alt="Avatar" />
        {props.user.points ?
            <span   //id="prof-nick" 
                    className="main-userinfo prof-nick ">
            {props.user.nickName}
            </span>
        :
            <input  id="nickname-edit"
                    className="main-userinfo prof-nick "
                    placeholder={props.user.nickName}
                    maxLength="12"
            /> 
        }
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