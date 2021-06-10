/*---------------------------------
Custom react component.
 Component name: 
 Description: 
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React,{useRef} from 'react';
import { Button } from 'semantic-ui-react';
import './Messenger.css';

export default function Messenger(props){

    const msg = useRef(null);
    
    function sendMessage(){
      alert("Messenger component: "+msg.current.value);
      msg.current.value='';
    }

    return(
      <div  className="labeldiv-inner blur message"
            Style={`width: ${props.width}; top: ${props.top}; right:${props.right};`}>
        <input ref={msg}/>
        <Button icon='send'
                className="bt "
                onClick={sendMessage}
        />
      </div>
    );
};