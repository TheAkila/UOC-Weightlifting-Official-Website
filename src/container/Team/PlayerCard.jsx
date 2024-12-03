import React, { useState } from 'react';
import './PlayerCard.css';
import { ChevronDown } from 'lucide-react'; // Import ChevronDown icon
import PopupModal from '/Users/akilanishan/Documents/uoc/src/components/PopupModel/PopupModel.jsx'; // Update path if necessary

function PlayerCard({ player }) {
  const [showModal, setShowModal] = useState(false);

  // Handle modal show/hide
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className='profile-card'>
      <div className='image'>
        <img src={player.image} alt={player.name} className="player-card-image" />
      </div>

      <div className='text-data'>
        <h3 className="player-name">{player.name}</h3>
        <p className="player-position">{player.position}</p>

        {/* Button with Icon */}
        <button onClick={handleShowModal} className='show-more-button'>
          <ChevronDown size={24} className="icon" />
        </button>

        {/* Modal */}
        {showModal && <PopupModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default PlayerCard;
