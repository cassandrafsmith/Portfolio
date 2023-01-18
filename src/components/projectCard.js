import React from 'React';
import './../styles/projectCard.css';
import openIcon from './../images/open_in_new.svg';
import mockup from './../images/DT_mockup.svg'


const ProjectCard = () =>{
    return(
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
                  <a href='https://decentralizedtech.org/' target='_blank'><img className='icon' id='open-in-new' src={openIcon} /></a>
                </div>
            </div>
            <img className='mockup' src={mockup} alt='mockup on laptop and phone' />
        </div>    
    )
};

export default ProjectCard;