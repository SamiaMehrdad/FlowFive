/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props: [img] , message
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './TimerBar.css';

export default function Bar(props){

    const style = { width: props.width , 
                    // backgroundColor: props.width>70?
                    //                  "var (--gold)" :
                    //                  "#a55"
    };

    return (
        <div className="TimerBar" style={style}> </div>
    )
}