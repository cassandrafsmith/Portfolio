import * as React from "react";
import { Link } from 'gatsby';
import './../styles/index.css';
import logo from './../images/Black and White Minimal Monogram Logo.svg';

const IndexPage = () => {
  return (      
    <div className='main'> 
    <div className='body-card'>     
      <header className='header'>      
      <img id='logo' src={logo} alt='logo' />
       <ul className='header-list'>       
        <li className='header-li'><Link to='#about'>About</Link></li>       
        <li className='header-li'><Link>Projects</Link></li>
        <li className='header-li'><Link>Contact</Link></li>
        <li className='header-li'><Link>Resume</Link></li>
       </ul>
      </header>
                
        <div className='intro-section'>        
          <div className='intro-copy'>
            <h1 className='title' id="intro-title">Hi, I'm Cassandra.</h1>
            <h4 className='sub-title' id='intro-sub-title'>I like to build things...</h4>  
          </div> 
          <div className='intro-image'>
            <img id='placeholder' src={logo} alt='logo' />
          </div> 
        </div>        
      </div>      
      <footer className='footer'></footer>
    </div>
  )
}

export default IndexPage;

export const Head = () => <title>Cassandra F. Smith | Software Engineer</title>
