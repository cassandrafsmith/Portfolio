//object to store project information

import mockupOne from './../images/DT_mockup.svg';
import dtMockup352 from './../images/mockups/DT_mockup352.svg';
import labyrinthMockup352 from './../images/mockups/labyrinth_mockup352.svg';
import portfolioMockup352 from './../images/mockups/portfolio_mockup352.svg';

export const projectCardInfo =[
    {      
        title: 'Website Build',
        description: `For this project I, along with my
        capstone team members, built a complete website
        rebuild for Decentralized Technologies, a 
        company located in Marietta, GA. The build included the 
        public facing website, along with admin, 
        employee, and client dashboards.`,
        tools: 'React • ReactRouter • Node.js • Express • PostgreSQL',
        github: 'https://github.com/KSU-Capstone-22',
        url: 'https://decentralizedtech.org/',
        mockup: dtMockup352,
    },
    {       
        title: 'Labyrinth Game',
        description: `For this project, I lead a group of
         final semester team mates in the planning, design, 
         and building of a labyrinth puzzle game using the 
         Unity Game Engine.`,
        tools: 'C# • Unity Game Engine ',
        github: 'https://github.com/cassandrafsmith/labyrinth-game',
        url: 'https://cassandrafsmith.itch.io/labyrinth',
        mockup: labyrinthMockup352,    
    },
    {       
        title: 'Personal Portfolio',
        description: `For this project I built my personal
        portfolio using React. It was an exciting project to design 
        and built because it gave me the opportunity 
        to learn about and work with the Gatsby framework.`,
        tools: 'CSS • React • Gatsby',
        github: 'https://github.com/cassandrafsmith/Portfolio',
        url: 'https://cassandrafsmith.com/',
        mockup: portfolioMockup352,    
    },
];