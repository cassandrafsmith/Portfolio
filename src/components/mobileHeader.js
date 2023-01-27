import React from 'react';
import {useState } from 'react';
import { Link } from 'gatsby';
import './../styles/index.css';
import './../styles/mobileHeader.css';
import resume from './../assets/resumeCassandraSmith.pdf';
import logo2 from './../images/black_and_white_logo.svg';
import hamburger from './../images/menu_FILL0_wght400_GRAD0_opsz48.svg';
import close from './../images/close_FILL0_wght400_GRAD0_opsz48.svg';

const MobileHeader = () => {
    const [closed, setClosed] = useState(true);

    const handleClick = (e) => {
        e.preventDefault();
        setClosed(!closed);
    }

    return(
        <header id='mobile-header'>
            
            {closed ?
               <div className='mobile-header-menu'>
                    <img id='logo' src={logo2} alt='logo' />
                    <button className='mobile-header-btn' onClick={handleClick}><img className='header-icon' id='hamburger-btn' src={hamburger} alt='menu icon'></img></button> 
               </div>   
                :
                <>
                    
                    <div className='mobile-header-menu'>
                        <img id='logo' src={logo2} alt='logo' />
                        <button className='mobile-header-btn' onClick={handleClick}><img className='header-icon' id='close-btn' src={close} alt='menu icon'></img></button>
                    </div>
                    <div className='mobile-header-dropdown'>
                        <ul className='mobile-header-list'>       
                            <li className='mobile-header-link header-link header-link-ltr'><Link to='#about'>About</Link></li>       
                            <li className='mobile-header-link header-link header-link-ltr'><Link to='#projects'>Projects</Link></li>
                            <li className='mobile-header-link header-link header-link-ltr'><Link to='#contact'>Contact</Link></li>
                            <li className='mobile-header-link header-link header-link-ltr'><a href={resume} target='_blank' rel='noreferrer'>Resume</a></li>
                        </ul> 
                    </div>                       
                      
                </>          
            }  
        </header>
    )
}

export default MobileHeader;