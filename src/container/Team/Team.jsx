import React, { useState } from 'react';
import { mensTeam, womensTeam,Menscoach,Womenscoach } from '../../constants/data';
import PlayerCard from './PlayerCard'; 
import './Team.css';

const Team = () => (
  <div className="team-page">
    {/* Men's Team Section */}
   
    <section className="team-section">
      <h2 className="section-title">Men's Team 2024</h2>

      

      <div className="team-players">
        {mensTeam.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </section>

    {/* Women's Team Section */}
    <section className="team-section">
      <h2 className="section-title">Women's Team 2024</h2>

     

      <div className="team-players">
        {womensTeam.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </section>

     {/* coach's Team Section */}
     <section className='coach section'>
      <h2 className='section-title'>Team Coaches</h2>

      <div className="coach">
        {Menscoach.map((player) => (
          <PlayerCard player={player} />
        ))}
      </div>

      <div className="coach">
        {Womenscoach.map((player) => (
          <PlayerCard player={player} />
        ))}
      </div>


     </section>
  </div>
);

export default Team;
