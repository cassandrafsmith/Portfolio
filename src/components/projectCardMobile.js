import React from 'react';
import { useEffect } from 'react';
import './../styles/projectCardMobile.css'
import './../styles/projectCard.css';
import './../styles/index.css';
import openIcon from './../images/open_in_new.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCardMobile = ({props}) =>{   
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease',
            once: true,
        });
      }, []);

    return(
        <div className='project-card-mobile grow' data-aos="zoom-in"  >
            <h4 className='project-title-mobile'>{props.title}</h4>
            <img className='mockup-mobile' src={props.mockup} alt='mockup on laptop and phone' /> 
            <div className='project-info-mobile'>              
              <p className='project-description-mobile'>{props.description}</p>
                <p className='tools-used-mobile'>{props.tools}</p>
                <div className='project-icons-mobile'>
                  <a href={props.github} target='_blank'rel="noreferrer"><img className='social-logo grow' id='github-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github logo'/></a>
                  <a href={props.url} target='_blank'rel="noreferrer"><img className='icon grow' id='open-in-new' src={openIcon} alt='open in new page icon'/></a>
                </div>
            </div>
           
        </div>        
    )
};

export default ProjectCardMobile;