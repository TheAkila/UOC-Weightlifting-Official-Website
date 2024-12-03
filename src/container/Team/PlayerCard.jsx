import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Import the ChevronDown icon for the dropdown button
import PopupModal from '/Users/akilanishan/Documents/uoc/src/components/PopupModel/PopupModel.jsx'; // Import the PopupModal component (adjust the path if needed)
import './PlayerCard.css'; // Import the CSS file for styling

function PlayerCard({ player }) {
  const [showModal, setShowModal] = useState(false); // State to handle the modal visibility

  // Function to show the modal
  const handleShowModal = () => setShowModal(true);

  // Function to close the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className='profile-card'>
      <div className='image'>
        <img src={player.image} alt={player.name} className="player-card-image" />
      </div>

      <div className='text-data'>
        <h3 className="player-name">{player.name}</h3>
        <p className="player-position">{player.position}</p>

        {/* Button with ChevronDown icon to show more details */}
        <button onClick={handleShowModal} className='show-more-button'>
          <ChevronDown size={24} className="icon" />
        </button>

        {/* Show PopupModal when 'showModal' is true */}
        {showModal && <PopupModal onClose={handleCloseModal} player={player} />}
      </div>
    </div>
  );
}

export default PlayerCard;
