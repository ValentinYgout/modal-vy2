
import React from 'react';
import "./style.css";



const Modal = ({ isOpen, onClose, content }) => {
  return (
    <div className={`modal-container ${isOpen ? 'open' : ''}`}>
      <div className="modal-backdrop"></div>
      <div className="modal">
        <span>{content}</span>
        <span className="close" onClick={onClose}>x</span>
      </div>
    </div>
  );
};

export default Modal;