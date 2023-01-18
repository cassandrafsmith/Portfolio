import * as React from "react";
import { Link } from 'gatsby';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Toolkit from "../components/toolkit";
import './../styles/index.css';
import logo from './../images/Black and White Minimal Monogram Logo.svg';
import portrait from './../images/Portrait.png';
import resume from './../assets/resume - Cassandra Smith.pdf';
import mockup from './../images/DT_mockup.svg'

const IndexPage = () => {
  return (      
    <div className='main'> 
      
      <div className='body-card'>

        <header className='header'>              
            <img id='logo' src={logo} alt='logo' />
            <ul className='header-list'>       
              <li className='header-link header-link-ltr'><Link to='#about'>About</Link></li>       
              <li className='header-link header-link-ltr'><Link to='#projects'>Projects</Link></li>
              <li className='header-link header-link-ltr'><Link to='#contact'>Contact</Link></li>
              <li className='header-link header-link-ltr'><a href={resume} target='_blank' rel='noreferrer'>Resume</a></li>
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

        <div className='projects-section' id='projects'> 
          <h2 className='section-title' id="project-section-title">Projects 💜</h2>  
          <div className='project-card'>
            <div className='project-info'>
              <h4 className='project-title'>Website Build</h4>
              <p className='project-description'> For this project I, along with my
                 capstone team members, built a complete website
                  rebuild for Decentralized Technologies, a 
                  company located in Merietta, GA. The build included the 
                  public facing website, along with admin, 
                  employee, and client dashboards.
                </p>
                <p className='tools-used'>React • Node.js • Express • PostgreSQL</p>
                <div className='project-icons'>
                <a href="https://github.com/KSU-Capstone-22/decentralized-tech-website" target='_blank'><img className='social-logo' id='github-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
                
                </div>
              </div>
            <img className='mockup' src={mockup} alt='mockup on laptop and phone' />
          </div>
        </div> 
        
          <div className='about-section' id='about'>          
            <h2 className='section-title'>About Me 💜</h2>         
            <div className='about-me-letter'>
              <p className='section-copy' id='greetings'>
                Hello, World!
              </p>
              <p className='section-copy'> 
                I'm Cassandra Smith, a full-stack software engineer 
                based out of the Dallas-Ft. Worth Metroplex.
                I enjoy the process of bringing together logic and art to create 
                responsive websites and web apps that are both user-friendly and accessible. 💻
              </p>
              <p className='section-copy'>
                {/* My first intro to programming was with Java--the wordiness and syntactic rules 
                touched my heart. 💜 However, after diving further into web development, I realized 
                that JavaScript is where it's at! 🤗  */}
                I enjoy a challenge and am excited to broaden 
                my skills in an environment that inspires growth, encourages mentorship, and 
                supports continued-learning.
              </p>
              <p className='section-copy'>
                When I'm not at my computer, I enjoy the usuals--spending time with my family, 
                baking, eating 🍽, reading Scandi-Noir, starting knitting projects that I probably 
                won't finish, and bingeing my favorite shows. Recommendations for dark crime dramas, 
                or anything vampire related, are always welcome! 😝
              </p>
              <p className='section-copy'>
                Anyway, if you made it this far, thank you and please, feel free to drop me a line! 
              </p>
              <p className='section-copy' id='salutation'>
                Sincerely,              
              </p>
              <p className='section-copy' id='signiture'>
                Cassandra F. Smith
              </p>
            </div>
            <h3 class="section-subheading">Tool Kit 🔧</h3>
            <Toolkit />
          </div>     

        <div className='contact-section' id='contact'> 
        <h2 className='section-title' id='contact-section-title'>Contact 💜</h2> 
          <div id='form-section'>
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
