import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/blotlogo.png'
import Map from './Map'; //importing map component
import './Navbar.css'

function Navbar(){
    return(
        <nav>
        <img src={logo} alt=" " width="250" height="250"/>
            <ul>
            <li><a href="https://github.com/vandit-bera/React-Routing/blob/master/src/component/Navbar.js">What is Period Poverty?</a></li>

                <li><a href="https://github.com/vandit-bera/React-Routing/blob/master/src/component/Navbar.js">Purpose & Resources</a></li>
            <li> <Map /> </li> {/* rendering map */}
            </ul>
          
        </nav>
    );
}

export default Navbar;