/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React, { useState, } from 'react';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import WaitingPlayer from '../../components/WaitingPlayer/WaitingPlayer'
import TimerBar from '../../components/TimerBar/TimerBar'
import './ActiveRound.css';

export default function ActiveRound(props){


    const testUser = { nikname: "Hayoola",
                        avatar: "test.jpg",
                        rank: 50,
                        chat: "This is a chat message with 100 characters, and again, This is a chat message with some characters !"
                     };
    const testUser2 = { nikname: "Hayoola2",
                avatar: "test.jpg",
                rank: 50,
                chat: "And another chat message but a little shorter !"
                }; 

    const [user2, setUser2] = useState( testUser2 );

    const onTimeOut = () => {
        console.log("TimeOUT!");
    };

    const quitTheGame = () =>{
        props.showPage('Main','RightHome'); 
    }

    return(
        <>
            <LabelDiv title='CHAT BOX' >
                <input style={{width: '250px', margin: '0 0 5px 5px'}} />
                <button style={{width: '50px'}}>SEND</button>
            </LabelDiv>
            <TimerBar user={testUser} time={30} onTimeOut={onTimeOut} />
            <WaitingPlayer user={testUser} />
            <WaitingPlayer user={user2} />
            <WaitingPlayer user={testUser} />
            <div id="game-info">
                <p>00:02:56</p>
                <p>2284 Moves</p>
            </div>
            <button id="quit-game" onClick={quitTheGame}>QUIT</button>
        </>
    );
};