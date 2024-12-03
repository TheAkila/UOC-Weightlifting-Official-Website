import React from 'react';
import './PlayerCard.css';


const PlayerCard = ({ player }) => (
 



      <div className='profile-card'>
        <div className='image'>
              <img src={player.image} alt={player.name} className="player-card-image" />
             
        </div>

        <div className='text-data'>
        <h3 className="player-name">{player.name}</h3>
        <p className="player-position">{player.position}</p>
          
        </div>

  


      </div>
      







);

export default PlayerCard;
