import React, { useState } from 'react';
import PopupModel2 from '/Users/akilanishan/Documents/uoc/src/components/PopupModel2/PopupModel2.jsx'; 
import './CompetitionCard.css'; 

function CompetitionCard({ competition, description, results }) {
  const [showModel, setShowModel] = useState(false);

  // Show modal
  const handleShowModel = () => setShowModel(true);

  // Close modal
  const handleCloseModel = () => setShowModel(false);

  return (
    <div className="competition-card">
      <div className="text-data">
        <h3 className="competition-name">{competition.name}</h3>
        <p className="competition-date">{competition.date}</p>
        <p className="competition-location">{competition.location}</p>
        <p className="competition-description">{description}</p>

        <button onClick={handleShowModel} className="show-more-button">
          Show More
        </button>

        {/* Display the PopupModel2 when clicked */}
        {showModel && <PopupModel2 onClose={handleCloseModel} competition={competition} description={description} results={results} />}
      </div>
    </div>
  );
}

export default CompetitionCard;
