import React from 'React';
import { useEffect } from 'react';
import './../styles/projectCard.css';
import './../styles/index.css';
import openIcon from './../images/open_in_new.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({props}) =>{   
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease',
            once: true,
        });
      }, []);

    return(
        <div className='project-card grow' data-aos="zoom-in"  >
            <div className='project-info'>
              <h4 className='project-title'>{props.title}</h4>
              <p className='project-description'>{props.description}</p>
                <p className='tools-used'>{props.tools}</p>
                <div className='project-icons'>
                  <a href={props.github} target='_blank'rel="noreferrer"><img className='social-logo grow' id='github-logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github logo'/></a>
                  <a href={props.url} target='_blank'rel="noreferrer"><img className='icon grow' id='open-in-new' src={openIcon} alt='open in new page icon'/></a>
                </div>
            </div>
            <img className='mockup' src={props.mockup} alt='mockup on laptop and phone' /> 
        </div>        
    )
};

export default ProjectCard;