import * as React from "react";
import { Link } from 'gatsby';
import './../styles/index.css';
import logo from './../images/Black and White Minimal Monogram Logo.svg';
import portrait from './../images/Portrait.png';

const IndexPage = () => {
  return (      
    <div className='main'> 
      
      <div className='body-card'>

        <header className='header'>              
            <img id='logo' src={logo} alt='logo' />
            <ul className='header-list'>       
              <li className='header-li'><Link to='#about'>About</Link></li>       
              <li className='header-li'><Link to='#projects'>Projects</Link></li>
              <li className='header-li' ><Link to='#contact'>Contact</Link></li>
              <li className='header-li'><Link>Resume</Link></li>
            </ul>         
        </header> 

        <div className='intro-section' id='intro'> 
          <div className='intro-copy'>
            <h1 className='title' id="intro-title">Hi, I'm Cassandra.</h1>
            <h4 className='sub-title' id='intro-sub-title'>I like to build things...</h4>  
          </div> 
          <div className='intro-image'>
            <img id='portrait' src={portrait} alt='Illustrated portrait of Cassandra Smith' />
          </div> 
        </div>

        <div className='about-section' id='about'> 
          <div>
            <p> this is filler text</p>
          </div>
        </div> 

        <div className='projects-section' id='projects'> 
          <div>
            <p> this is filler text</p>
          </div>
        </div> 

        <div className='contact-section' id='contact'> 
          <div>
            <h1>Let's Connect!</h1>
            <p>Please, feel free to reach out with any question or comments.</p>
          </div>
          <div id="contact-form" class="section-content">
                    <form id="form" >
                        <input type="text" id="name" placeholder="Name" required/>
                        <input type="text" id="email" placeholder="Email" required/>
                        <textarea rows="10" column="80" placeholder="Enter your message here..." required></textarea>
                        <button type="submit" class="button">Get in Touch</button>
                    </form>
          </div>
        </div> 

        <footer className='footer' id='footer'>
          <img id='logo' src={logo} alt='logo' />
          <p className='footer-copy'>Designed & Developed by Cassandra F. Smith © 2023 😊</p>
          <div className='sicial-icons'>
            {/*add onHover animation to the link icons*/}
            <a href='https://www.linkedin.com/in/cassandra-f-smith/' target='_blank'><img className='social-logo' id='linkedIn-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" /></a>            
            <a href="https://github.com/cassandrafsmith" target='_blank'><img className='social-logo' id='github-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>          
          </div>
        </footer> 

      </div>      
        
    </div>      
  )
}

export default IndexPage;

export const Head = () => <title>Cassandra F. Smith | Software Engineer</title>
