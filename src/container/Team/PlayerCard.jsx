import React from 'react';
import './PlayerCard.css';


const PlayerCard = ({ player }) => (
  <div className="player-card">
    <img src={player.image} alt={player.name} className="player-card-image" />
    <div className="player-card-info">
      <h3 className="player-name">{player.name}</h3>
      <p className="player-achievements">{player.achievements}</p>
    </div>
  </div>
);

export default PlayerCard;
