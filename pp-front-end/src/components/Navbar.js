import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/blotlogo.png'
import './Navbar.css'

function Navbar(){
  return(
      <nav className="logo">
        <img id="logo" src={logo} alt=" " />

<div className='navlinks'>
<ul>
          <div>
          <li><a href="https://github.com/vandit-bera/React-Routing/blob/master/src/component/Navbar.js">What is Period Poverty?</a></li>
          </div>

          <div>
          <li><a href="https://github.com/vandit-bera/React-Routing/blob/master/src/component/Navbar.js">Purpose and Resources</a></li>
          </div>

        </ul>

</div>

       
      </nav>
  );
}

export default Navbar;
