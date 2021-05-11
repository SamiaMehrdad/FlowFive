/*---------------------------------TODO
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React , { useState, } from 'react';
import Tooltip from 'react-tooltip';
import LabelDiv from '../../components/LabelDiv/LabelDiv';
import FriendBar from '../../components/FriendBar/FriendBar';
import AddFriend from '../../components/AddFriend/AddFriend';

import './FriendsList.css';
//----------------------------------------
export default function FriendsList(props){

  const [searchBox, setSearchBox] = useState(false);

  //----------------------------------------
  return(
  <>  
    <LabelDiv   
                title="FRIENDS" 
                height="80%">

    { 
      props.friends && props.friends.length ?
        props.friends.map((friend, index) =>
            <FriendBar  user={friend}
                    buttonLabel="REMOVE"
                    onClick={e=>props.removeFriend(e.currentTarget.getAttribute("id"))}
                    key={index}
            />
          )
      : <p id='nf-message'>You have no friends in list. Add some!</p>
    }
    </LabelDiv>
    <button className="add-friend circle"
            data-tip
            data-for="add-tip"
            onClick={()=>setSearchBox(true)}>
        +
    </button>
    {searchBox? 
      <div id="search-add" className="card lighted">
        <close  className="close-icon"
                onClick={()=>setSearchBox(false)} />
        <AddFriend user={props.user}
                   addFriend={props.addFriend} 
                />
      </div>
      : null
    }
    <Tooltip    
        id="add-tip"
        delayShow={500} 
    >
        Search and add friends to your list            
    </Tooltip>
  </>  
  )
}