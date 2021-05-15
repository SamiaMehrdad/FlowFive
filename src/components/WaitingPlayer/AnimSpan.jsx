/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, useEffect } from 'react';

export default function AnimSpan(props){

    let index = 0;
    let chat = props.text;
    let interval = null;

    const [msg, setMsg] = useState('');

    
        useEffect(() => 
        {
            setMsg( '' );
            index = 0;
            if(chat)
                interval = setInterval( () => 
                {
                    index < chat.length ?
                        setMsg( msg => msg + chat.charAt( index++ )) 
                        : clearInterval(interval)
                }, 70);
        }, [chat]);

    return( <span className="WaitingPlayer-chat"> {msg} </span> );
};