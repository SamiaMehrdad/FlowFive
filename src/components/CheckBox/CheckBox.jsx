 /*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developed by: Mehrdad Samia - 2021
----------------------------------*/

import React, {useState} from 'react';
import './CheckBox.css';

export default function CheckBox(props){

    const [check, setCheck] = useState(false);

    function change(e){
        setCheck( !check );
        if(props.onClick)
            props.onClick(e, !check);
    }

    return(
        <div className="check-container" >
            <input type="checkbox"
                    id={props.id}
                    checked={check}
                    onChange={change} />
            <span className="check-label"
                  onClick={change}
                  id={props.id}>
                  {props.title}
            </span>
        </div>
    );
};