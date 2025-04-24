import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

Modal.setAppElement('#root'); 

function ModalComponent({ modalIsOpen, closeModal, currentProject }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Project Specifications"
    >
      <h2>Project Specifications</h2>
      {currentProject ? (
        <>
          <h3>{currentProject.title}</h3>
          <p>{currentProject.longDescription || 'No detailed description available.'}</p>
          <button onClick={closeModal}>Close</button>
        </>
      ) : (
        <p>No project selected.</p>
      )}
    </Modal>
  );
}

export default ModalComponent;