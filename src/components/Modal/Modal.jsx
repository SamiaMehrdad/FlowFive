/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import TitleDiv from '../../components/TitleDiv/TitleDiv';

import './Modal.css';

export default function Modal(props){



return(
    <>
        <div className="shade"> </div>
        <div className = "modal">
            <TitleDiv title={props.title}
                    width={props.width}
                    
                    >
                <br />
                <p className="modal-message">
                {props.message}
                </p>  
                <br />         
                <button onClick={props.onOk}>{props.okTitle}</button>
                {props.cancelTitle ? 
                    <button onClick={props.onCancel}>CANCEL</button>
                 : null }   
                <br />
                <br />
            </TitleDiv>

       </div>
    </>
)
}