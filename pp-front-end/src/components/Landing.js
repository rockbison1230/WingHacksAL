import {React, useState} from 'react';
import './Landing.css';
import flower from "../assets/flower.png";
import axios from 'axios'
import Map from './Map'; //importing map component


function Landing(){
    return(
     <>   
     <div id='secondRectangle'>

        <div className='purposeBg'>
            <div className='purposetext'>
                <div className='purposeheader'>
                    <img src={flower} alt=""/>
                <h3><strong>BLOT</strong></h3>
                </div>
                    <p>
                    The purpose of this website and <strong>Basic Needs for Ladies Over Time (BLOT) </strong> 
                    is to bring attention to the global problem of period poverty.
                    As of 2023, more than 35% of the world lacks necessities for 
                    feminine hygiene.  With this project, we aim to educate others
                    on how serious and prevalent this issue is, as well as offer resources for support. 
                    </p>
            </div>
        </div>

        <div className='themap'>
            <div className='maptext'>
                <div className='mapheader'>
                <h3><strong>Our Map</strong></h3>
                </div>
                    <p>
                    Our map locates women's shelters within any state entered in the search field below.
                    Using any of the pins which are generated depending onthe number of resources within
                    the state, you can then click on any to get the address, website, and phone number of
                    the organization.
                    </p>
            </div>
        </div>

        <div className='thirdDk'>
            <div className='thirdDktext'>
                <div className='thirdDkheader'>
                <h3><strong>Dunno yet</strong></h3>
                </div>
                    <p>
                    Our map locates women's shelters within any state entered in the search field below.
                    Using any of the pins which are generated depending onthe number of resources within
                    the state, you can then click on any to get the location, address, and phone number of
                    the organization.
                    </p>
            </div>
        </div>
    </div>

    <div id="searchBar">
    <input type="text" placeholder="Enter a state"/>
        <div className = "map-container">
        <Map id="myMap" /> {/* rendering map */}
        </div>
    </div>
    </>   
    );
}
export default Landing;