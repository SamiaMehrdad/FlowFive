/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
 Parent: FlowFivePage
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React from 'react';
import './HomeLeft.css';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import GuestBar from '../../components/GuestBar/GuestBar';

export default function HomeLeft(props){

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
    //console.log('user :', props.user.nickName );
    function goInvite()
    {
        props.showPage("MakeInvitation","");
    }
    function goSetting()
    {
        props.showPage("MySettings","");
    }
    function view()
    {
        props.showPage('ActiveRound','Play');
    }
    return(
        <>
            <img    className='TimerBar-image' 
                    src="./test.jpg" 
                    id="main-image" 
                    alt="Avatar"/>
            <span   className="main-userinfo">
            {props.user.nickName}<br />Rank:82
            </span>
            <span   className="setting-icon" 
                    onClick={ goSetting }>
            {'\u2699'} {/*unicode for gear icon */}
            </span>
            <br />
            <br />
            <br />
            <LabelDiv   id="inviteds" 
                        title="FRIENDS OPEN ROOMS" 
                        height="75%">
                <GuestBar   user={testUser} 
                            onClick={view}
                />
            </LabelDiv>
            <div className="bottom-stick main-page ">
                <button className="green" 
                        onClick={ goInvite } >
                OPEN PLAY ROOM
                </button>
                <button >
                TRY UNKNOWN
                </button>
            </div>    
        </>
    );
};