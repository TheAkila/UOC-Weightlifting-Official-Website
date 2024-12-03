import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react'; // Import close icon

function PopupModal({ onClose, player }) {
  const modalRef = useRef();

 
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

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
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg w-96 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        {/* Modal content */}
        <h1 className="text-2xl font-bold text-center">{player.name}</h1>
        <p className="text-center text-xl text-gray-500">{player.position}</p>

        {/* Player image */}
        <div className="mt-4 flex justify-center">
          <img src={player.image} alt={player.name} className="w-40 h-40 rounded-full object-cover" />
        </div>

        {/* Player data (bio or additional info) */}
        <div className="mt-6">
          <p className="text-gray-700">{player.data}</p>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
