import * as React from "react";
import { useEffect, useState }from 'react';
import { Link } from 'gatsby';
import Header from "../components/header"
import MobileHeader from '../components/mobileHeader';
import ProjectCard from "../components/projectCard";
import ProjectCardMobile from "../components/projectCardMobile";
import Toolkit from "../components/toolkit";
import './../styles/index.css';
import logo from './../images/Black and White Minimal Monogram Logo.svg';
import logo2 from './../images/black_and_white_logo.svg';
import scroll from './../images/arrow_upward_FILL0_wght400_GRAD0_opsz48.svg'
import appleTouchIcon from './../images/favicon/apple-touch-icon.png';
import icon16 from "./../images/favicon/favicon-16x16.png";
import icon32 from "./../images/favicon/favicon-32x32.png";
import portrait from './../images/Portrait.png';
import resume from './../assets/resumeCassandraSmith.pdf';
import {projectCardInfo} from './../assets/projectCardInfo.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndexPage = () => {
  const [small, setSmall] = useState(window.innerWidth < 767); 
  const [header, setHeader]  = useState(window.innerWidth < 650);

  useEffect(() => {
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out-back',
        once: true,       
    });
  }, []);

  //update state comparing screen size
  const updateSize = () => {
    setSmall(window.innerWidth < 767);
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  })

  //update header from standard to mobile
  const updateHeader = () => {
    setHeader(window.innerWidth < 650);
  };

  useEffect(() => {
    window.addEventListener('resize', updateHeader);
    return () => window.removeEventListener('resize', updateHeader);
  })

  return (      
    <div className='main'> 
      <div className='body-card'>
        {header ?
          <MobileHeader />
          :
          <Header />
        }   
        <div className='intro-section' id='intro'> 
          <div className='intro-copy'>
            <h1 className='title' id="intro-title"
              data-aos="zoom-in" 
              data-aos-duration='1000'>
                Hi, I'm Cassandra.
            </h1>
            <h4 className='sub-title' 
              id='intro-sub-title' 
              data-aos="zoom-in-up" 
              data-aos-duration='1000' 
              data-aos-delay="1400">
                I like to build things...
            </h4>  
          </div> 
          <div className='intro-image'>
            <img id='portrait' src={portrait} alt='Illustrated portrait of Cassandra Smith' />
          </div>          
        </div>

        <div className='scroll'>
          <a href='#'><img id='scroller' className='grow' src={scroll} alt='up arrow scroller'></img></a>
        </div>
        
        <div className='about-section' id='about'>  
          <h2 className='section-title' id='about-section-title' data-aos='fade-right'>About Me 💜</h2>         
          <div className='about-me-letter'>
            <p className='section-copy' id='greetings'>
              Hello, World!
            </p>
            <p className='section-copy'> 
              I'm Cassandra Smith, a <span id='am-span1'>full-stack software engineer</span> based
               out of the Dallas-Ft. Worth Metroplex.
              I love the process of bringing together logic and art to create 
              responsive websites and web apps that are both user-friendly and engaging. 💻 
              As a problem-solver, I enjoy a challenge and am excited to broaden my skills in an
              environment that inspires growth, encourages mentorship, and supports continued-learning. 🌟
              I am currently learning more about inclusive UI/UX design  
              and how to create digital experiences that are fun and accessible for all.
            </p>
            <p className='section-copy'>             
              I have a <span id='am-span2'>Bachelor of Science in Psychology</span> from Northwestern State University of Louisiana,                
              and a <span id='am-span3'>Master of Science in Software Engineering</span> from Kennesaw State University.
              When I'm not at my computer, I enjoy the usuals—spending time with my family, 
              baking, eating 🍴, reading Scandi-Noir, starting knitting projects that I probably 
              won't finish, and bingeing my favorite shows. Recommendations for dark crime dramas, 
              anything vampire related, and unique eats in the DFW area are always welcome! 😝
            </p>
            <p className='section-copy'>
             
            </p>
            <p className='section-copy'>
              Anyway, if you made it this far, <span id='am-span4'>thank you</span> and please, feel free to drop me a line! 
            </p>
            <p className='section-copy' id='salutation'>
              Sincerely,              
            </p>
            <p className='section-copy' id='signiture'>
              Cassandra F. Smith
            </p>
          </div>
          <h2 class="section-title" id='toolkit-section-title'>Tool Kit 🔧</h2>
          <Toolkit />
        </div>     

        <div className='projects-section' id='projects'> 
          <h2 className='section-title' id="project-section-title" data-aos='fade-right'>Projects 💜</h2> 
          {small ? 
            <>
              <ProjectCardMobile props={projectCardInfo[0]} />
              <ProjectCardMobile props={projectCardInfo[1]} />
              <ProjectCardMobile props={projectCardInfo[2]} />
            </>
           : 
            <>
              <ProjectCard props={projectCardInfo[0]} />
              <ProjectCard props={projectCardInfo[1]} />
              <ProjectCard props={projectCardInfo[2]} />
            </>
           }          
        </div> 

        <div className='contact-section' id='contact'> 
        <h2 className='section-title' id='contact-section-title' data-aos='fade-right'>Contact 💜</h2> 
          <div className='form-section' id='form-section'>
            <div>
              <h1 className='contact-title'>Let's Connect!</h1>
              <p className='contact-sub-title' >Please, feel free to reach out with any question or comments.</p>              
            </div>
            <div id="contact-form" class="section-content">
              <form 
                id="form" 
                name='contact' 
                method='POST' 
                netlify='true'
                action='/form-submission' >
                <input type="hidden" name="form-name" value="contact" />
                <label>Your Name:</label>
                <input type="text" name='name' id="name" placeholder="Name" required/>
                <label>Your Email:</label>
                <input type="email" name='email' id="email" placeholder="Email" required/>
                <label>Your Message:</label>
                <textarea name='message' rows="10" column="80" placeholder="Enter your message here..." required></textarea>
                <div className='button-container'>
                  <button type="submit" class="button">Get in Touch</button>
                  {/* <div data-netlify-recaptcha="true"/> */}
                </div>                          
              </form>
            </div>
          </div>
        </div> 

        <footer className='footer' id='footer'>
          <a href='#'><img id='logo' src={logo2} alt='logo' /></a>
          <p className='footer-copy'>Designed & Built by Cassandra F. Smith © 2023 😊</p>
          <div className='social-icons'>
            {/*add onHover animation to the link icons*/}
            <a href='https://www.linkedin.com/in/cassandra-f-smith/' target='_blank' rel="noreferrer"><img className='social-logo grow' id='linkedIn-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='linkedin icon'/></a>            
            <a href="https://github.com/cassandrafsmith" target='_blank' without rel="noreferrer"><img className='social-logo grow' id='github-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github icon'/></a>          
          </div>
        </footer> 
      </div> 
    </div>      
  )
}

export default IndexPage;

export const Head = () => (
  <>
    <title>Cassandra F. Smith | Software Engineer</title>
    <link  rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
    <link  rel="icon" type="image/png" sizes="32x32" href={icon32}/> 
    <link  rel="icon" type="image/png" sizes="16x16" href={icon16}/>
    <link  rel="manifest" href='./../images/favicon/site.webmanifest'/>
  </>
)
