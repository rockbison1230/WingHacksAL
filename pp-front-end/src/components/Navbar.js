import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/blotlogo.png'
import Map from './Map'; //importing map component
import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <div id = "logo"> 
            <img src={logo} alt=" " width="260" height="260"/>
            </div>
            <ul>
            <li><a href="https://github.com/vandit-bera/React-Routing/blob/master/src/component/Navbar.js">What is Period Poverty?</a></li>

                <li><a href="https://github.com/vandit-bera/React-Routing/blob/master/src/component/Navbar.js">  Purpose & Resources</a></li>
            <li> <Map /> </li> {/* rendering map */}
            </ul>
            <div className="background-container">
            <div className="textbox-container">
                <div contentEditable="true" className="editable-text">
                The purpose of this website and <span class="bold">Basic</span> Needs for <span class="bold">Ladies Over Time (BLOT)</span> is to bring attention to the global problem of period poverty. As of 2023, more than 35% of the world lacks necessities for feminine hygiene.  With this project, we aim to educate others on how serious and prevalent this issue is, as well as offer resources for support.
                </div>
            </div>

            </div>
        </nav>
    );
}

export default Navbar;