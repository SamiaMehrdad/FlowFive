  /*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, {useState} from 'react';
import { Button, } from 'semantic-ui-react';
import CheckBox from '../../components/CheckBox/CheckBox';
import './GoptionFF.css';

export default function GoptionFF(props){

  const [gOptions, setGOptions] = useState({
    timer: false,
    tVal: 5,
    blind: false,
    trade: false,
    death: false,
  });

  function change(e, val){
    
    const key = e.currentTarget.getAttribute("id");
    gOptions[key] = val;
    if(key==="timer")
      gOptions.death = false;
    setGOptions({...gOptions});

  }
//---------------------------------
// Control input value to be just 2 digits no-zero number 
//---------------------------------
function checkVal(e) {

 let val = e.target.value;
 if( isNaN(val) )
 { if( val.length > 1 )
      e.target.value = val[0];
   else
      e.target.value = '';
   return;
 } 
 if(val < 1 )
  e.target.value = '';
 if(val.length > 1) 
  e.target.value = val.slice(0,2);

  gOptions.tVal = e.target.value;
}

//-------------------------------
//-------------------------------
function propose() {
  console.log(gOptions);
  if( !gOptions.tVal )
  {
    gOptions.tVal = '5';
    document.getElementById("tVal").value = gOptions.tVal;
  }
}

//-------------------------------
  return(
    <div className="FFwrap"> 
     <div >
        <CheckBox title="Time limit " 
                  id="timer"
                  onClick={change}
        />
        
        {gOptions["timer"]?
          <div id="time-container">
            <input  id="tVal"
                    onChange={checkVal}
                    />
            <span style={{  fontSize: "1.8vh", 
                            }}> 
                             Sec       
            </span>
          </div>
        : null }
      </div>
      <CheckBox title="Play BLIND mode"
                id="blind"
                onClick={change} />
                
      {gOptions["timer"]? 
        <CheckBox title="Player loses if time goes out"
                      id="death" 
                      onClick={change}
        />
      : <p> </p>}
      <CheckBox title="Play TRADING mode"
                id="trade" 
                onClick={change} 
      />
      <Button content="PROPOSE" 
              className="bt"
              onClick = {propose}
      />
    </div>
  );
}