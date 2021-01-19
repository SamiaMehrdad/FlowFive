/*---------------------------------
Custom react component.
 Component name: 
 Description:
 Props:
Developped by: Mehrdad Samia - 2021
----------------------------------*/
import React, { useState, useRef, useEffect } from 'react';
import './HomePage.css';

const PAGES = ['',
'',];
export default function HomePage(props){

    return(
        <>
            <div className="app-container">
                <div className = "app-half left-panel" > </div>
                <div className = "app-half right-panel" > </div>
            </div>
        </>
    );
};