import React from 'react';
import { competitions, descriptions, results } from '/Users/akilanishan/Documents/uoc/src/constants/data.js'; 
import CompetitionCard from '/Users/akilanishan/Documents/uoc/src/container/Competitions/CompetitionCard.jsx'; 
import './Competitions.css'; 

function Competitions() {
  return (
    <div className="app">
      <h2>Competitions</h2>
      <div className="competition-list">
        {competitions.map((competition) => (
          <CompetitionCard 
            key={competition.id}
            competition={competition}
            description={descriptions[competition.descriptionId]}
            results={results[competition.resultsId]}
          />
        ))}
      </div>

      <h2>Upcoming Competitions</h2>
      <div className="competition-list">
        {competitions.map((competition) => (
          <CompetitionCard 
            key={competition.id}
            competition={competition}
            description={descriptions[competition.descriptionId]}
            results={results[competition.resultsId]}
          />
        ))}
      </div>

     
    </div>
  );
}

export default Competitions;
