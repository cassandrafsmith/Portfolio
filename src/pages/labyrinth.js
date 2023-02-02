import React from 'react';
import { Link } from 'gatsby';
import './../styles/index.css';
import './../styles/labyrinth.css';
import close from './../images/close_FILL0_wght400_GRAD0_opsz48.svg';


const Labyrinth = ()=> {
    return(
        <main className='main' id='labyrinth-page'>
            <Link to='/' id='close' ><img src={close} alt='back' /></Link>            
            <div className='iframe-container'>
            <iframe 
                frameborder="0" 
                src="https://itch.io/embed-upload/7241562?color=333333" 
                allowfullscreen="" 
                width="980" 
                height="580">
                <a href="https://cassandrafsmith.itch.io/labyrinth">Play Labyrinth on itch.io</a>
            </iframe>
            <div className='game-info'>
                <h1 className='game-title'>Labyrinth</h1>
                <p className="game-description">Labyrinth is a game in which the player must strategically navigate a maze
                    while being chased by the maze's defender, the Minotaur. However, navigating
                    the maze and evading the minotaur won't be as easy as it sounds. The player
                    must discover the layout of the maze as they progress through it. 
                </p>
                <h2 className='team'>Development Team</h2>
                <ul className='team-members'>                    
                    <li><span>Cassandra Smith:</span> Team Lead, Designer, Development</li>
                    <li><span>Hannah Burke:</span> Designer, Development</li>
                    <li><span>Ayorinde Lawani:</span> Designer, Development</li>
                    <li><span>Thomas Anderson:</span> Designer, Development</li>
                </ul>
            </div>
            </div>
        </main>
    )
}

export default Labyrinth;

export { Head } from "./index";