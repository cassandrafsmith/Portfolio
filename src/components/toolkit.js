import React from 'react';
import './../styles/toolkit.css';

const Toolkit = () =>{
    const tools = [
        {
            alt: 'html5',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
        },
        {
            alt: 'css3',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
        },
        {
            alt: 'JavaScript',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
            alt: 'Java',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',
        },
        {
            alt: 'React',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
        },
        {
            alt: 'Node.js',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
        },
        {
            alt: 'Express.js',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
        },
        {
            alt: 'MongoDB',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
        },
        {
            alt: 'SQLServer',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg',
        },
        {
            alt: 'VSCode',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg',
        },
        {
            alt: 'git',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg',
        },
        {
            alt: 'bash',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
        },
        {
            alt: 'npm',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
        },
        {
            alt: 'Gatsby',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg',
        },
        {
            alt: 'Unity',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
        },
        {
            alt: 'Google',
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original-wordmark.svg',
        },
    ]

    const toolsList = tools.map((item) => {
            return(
                <div class="icon">
                    <img src={item.url} alt={item.alt} title={item.alt}/>
                </div>
            )
        }); 
    

    return(                   
        <div id="skills" class="section-content"> 
            <div className='skill-icons'>
                {toolsList}
            </div>
        </div>        
    )
};

export default Toolkit;




/* <div class="skill-icons">                        
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            </div>
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            </div>
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </div>
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
            </div>
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            </div>
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
        </div>
    </div>
    <div class="skill-icons">
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
            </div>
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            </div>
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />
            </div>                          
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
            </div>
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
            </div>
        <div class="icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
        </div>
    </div>   */