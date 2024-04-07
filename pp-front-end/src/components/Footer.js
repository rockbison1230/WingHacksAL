//code template tutorial from https://www.youtube.com/watch?v=g459Eia-bxw
import React from 'react';
import './Footer.css'
import logo from '../assets/blotlogo.png'

function Footer()
{
    return(
        <footer className='footer'>
        <div className='container'>
            <div className='rowcentercontent'>
                <div className='colcentertext'>
                    <h2 className='footerheading'>
                    <a href="/" class="logo">Blot</a>
                    </h2>
                    <p className='menu'>
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Contact Us</a>
                        <a href="/">Learn More</a>
                    </p>
                </div>
            </div>
            <div className='centermoretext'>
                <p className='ha..'>
                    "Copyright.."
                </p>
            </div>
        </div>
        </footer>
    )
}

export default Footer;