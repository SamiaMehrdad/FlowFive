/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 Parent: FlowFivePage
Developped by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './Main.css';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import GuestBar from '../../components/GuestBar/GuestBar';

export default function Main(props){

    // const testImages = ["./test.jpg" , "./test.jpg"]
    const testUser = { nikname: "Hayoola",
                        avatar: "test.jpg",
                        rank: 50,
                        chat: "This is a chat message with 100 characters, and again, This is a chat message with some characters !"
                     }
    // const testUser2 = { nikname: "Hayoola2",
    //             avatar: "test.jpg",
    //             rank: 50,
    //             chat: "And another chat message but a little shorter !"
    //             }   

    //    const [user2, setUser2] = useState( testUser2 );
    function goInvite()
    {
        props.showPage("MakeInvitation");
    }
    function goSetting()
    {
        props.showPage("MySettings");
    }
    function view()
    {
        props.showPage('ActiveRound');
    }
    return(
        <>
        {/* <img className='TimerBar-image' src={props.user.avatar} id="main-image" /> */}
        <img className='TimerBar-image' src="./test.jpg" id="main-image" alt="Avatar"/>
        <span className="main-userinfo">Nick Name<br />Rank:82</span>
        <span className="setting-icon" onClick={ goSetting }>
            {'\u2699'}
        </span>
        <br /><br /><br />
        <LabelDiv id="inviteds" title="INVITATIONS" height="120px">
            <GuestBar user={testUser} onClick={view}/>
        </LabelDiv>
        <LabelDiv id="invitations" title="SENT INVITATIONS" height="120px">

        </LabelDiv>
        <div className="bottom-stick">
            <button onClick={ goInvite } >
                INVITE TO PLAY
            </button>
            <button >
                PLAY RANDOM
            </button>
        </div>    
        </>
    );
};