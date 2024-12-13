import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react'; 
import './PopupModal.css'; 

function PopupModal({ onClose, player }) {
  const modalRef = useRef();

  // Close the modal when clicking outside of the modal content
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  // Close the modal on pressing the Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="modal-overlay"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-content">
        {/* Close button */}
        <button
          onClick={onClose}
          className="close-button"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Modal content */}
        <h1 className="modal-title">{player.name}</h1>
        <p className="modal-position">{player.position}</p>

        {/* Player image */}
        <div className="modal-image-container">
          <img src={player.image} alt={player.name} className="modal-image" />
        </div>

        {/* Player data (bio or additional info) */}
        <div className="modal-bio">
          <p>{player.data || 'No additional details available.'}</p>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
