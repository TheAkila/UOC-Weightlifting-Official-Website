import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react'; // Assuming you are using lucide-react for icons

function PopupModal({ onClose }) {
  const modalRef = useRef();

  // Close modal if clicking outside
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  // Close modal if ESC key is pressed
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
    >
      <div className="bg-white rounded-lg w-80 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h1 className="text-2xl font-bold">Player Details</h1>
        <p className="mt-4">Here you can display additional information about the player.</p>
      </div>
    </div>
  );
}

export default PopupModal;
