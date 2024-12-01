import React from 'react';
import { mensTeam, womensTeam } from '../../constants/data';
import PlayerCard from '/Users/akilanishan/Documents/uoc/src/container/Team/PlayerCard.jsx';
import './Team.css';

const Team = () => (
  <div className="team-page">
    {/* Men's Team Section */}
    <section className="team-section">
      <h2 className="team-section-title">Men's Team</h2>
      <div className="team-players">
        {mensTeam.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </section>

    {/* Women's Team Section */}
    <section className="team-section">
      <h2 className="team-section-title">Women's Team</h2>
      <div className="team-players">
        {womensTeam.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </section>
  </div>
);

export default Team;
