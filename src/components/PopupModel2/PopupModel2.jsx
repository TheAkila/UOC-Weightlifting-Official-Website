import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react'; 
import './PopupModel2.css';

function PopupModel2({ onClose, competition, description, results }) {
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
        <button onClick={onClose} className="close-button" aria-label="Close modal">
          <X size={24} />
        </button>

        {/* Modal content */}
        <h1 className="modal-title">{competition.name}</h1>
        <p className="modal-position">{competition.date} - {competition.location}</p>

        {/* Player image */}
        <div className="modal-image-container">
          <img src={competition.image} alt={competition.name} className="modal-image" />
        </div>

        {/* Competition description */}
        <div className="modal-bio">
          <p>{description || 'No additional details available.'}</p>
        </div>

        {/* Competition results */}
        <div className="modal-bio">
          <h3>Results:</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopupModel2;
