// Modal.js
import React from 'react';
import '../Products.css';  // Asegúrate de crear estilos para tu modal en este archivo

const Modal = ({ show, onClose, children, imageUrl }) => {
    if (!show) {
      return null;
    }
  
    return (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}> 
              <div className="modal-close">
                <button className="modal-close" onClick={onClose}>×</button>
            </div> 
            <div className="modal-content">
              <div className="modal-image-container">
                {imageUrl && <img src={imageUrl} alt="Modal" className="modal-image" />}
              </div>
              <div className="modal-text-content">
                {children}
              </div>
            </div>
            <div className="modal-footer">
              <button className="close-button" onClick={onClose}>Cerrar</button>
            </div>
          </div>
        </div>
      );
  };
export default Modal;
