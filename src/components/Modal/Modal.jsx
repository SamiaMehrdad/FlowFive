/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import { Button } from 'semantic-ui-react';
import TitleDiv from '../../components/TitleDiv/TitleDiv';

import './Modal.css';

export default function Modal(props){



return(
    <>
        <div className="shade"> </div>
        <div className = "modal blur">
            <TitleDiv title={props.title}
                    width={props.width}
                    
                    >
                <br />
                <p className="modal-message">
                {props.message}
                </p>
                {props.children}  
                <br />
                <Button content={props.okTitle}
                        icon='check' 
                        labelPosition='left'
                        onClick={props.onOk}   
                        className="bt" />         
                {/* <button onClick={props.onOk}>{props.okTitle}</button> */}
                {props.cancelTitle ? 
                    <Button content={props.cancelTitle}
                            icon='undo' 
                            labelPosition='left'
                            onClick={props.onCancel}   
                            className="bt" /> 
                 : null }   
                <br />
                <br />
            </TitleDiv>

       </div>
    </>
)
}