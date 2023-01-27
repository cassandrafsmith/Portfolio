import React from 'react';
import { Link } from 'gatsby';
import './../styles/index.css';
import resume from './../assets/resumeCassandraSmith.pdf';
import logo2 from './../images/black_and_white_logo.svg';

const Header = () => {
    return(
        <header className='header'>              
            <img id='logo' src={logo2} alt='logo' />
            <ul className='header-list'>       
              <li className='header-link header-link-ltr'><Link to='#about'>About</Link></li>       
              <li className='header-link header-link-ltr'><Link to='#projects'>Projects</Link></li>
              <li className='header-link header-link-ltr'><Link to='#contact'>Contact</Link></li>
              <li className='header-link header-link-ltr'><a href={resume} target='_blank' rel='noreferrer'>Resume</a></li>
            </ul>         
        </header> 
    )
};

export default Header;