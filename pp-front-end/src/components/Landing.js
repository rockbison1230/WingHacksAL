import {React, useState} from 'react';
import './Landing.css';
import flower from "../assets/flower.png";
import Map from './Map'; //importing map component
import './gradient.css'; //importing gradient


function Landing(){
    return(
     <> 
     <div className = "gradient-background">
        
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
                    Some of the leading causes of period poverty are affordability and accessibility. 
                    A great resource to turn to is a shelter, as they're likely to provide resources. Our map shows women's shelters within the United States.
                    Click on any of the pins to get the address, website, and phone number of a women's advocacy center.
                    </p>
            </div>
        </div>

        <div className='thirdDk'>
            <div className='thirdDktext'>
                <div className='thirdDkheader'>
                <h3><strong>How Can You Help?</strong></h3>
                </div>
                    <p>
                        {/* https://yoppie.com/period-poverty */}
                        <ul>
                            <li>Donate to shelters and charities.</li>
                            <li>Attend marches and events.</li>
                            <li>Sign petitions. </li>
                            <li>Donate period products.</li>
                            <li>Support progressive bills.</li>
                        </ul>

                    </p>
            </div>
        </div>
    </div>

        <div className = "map-container">
        <Map id="myMap" /> {/* rendering map */}
        <div className = "container"></div>
        </div>
        </div>
        <div className="white-space"></div>



    </>   
    );
}

export default Landing;