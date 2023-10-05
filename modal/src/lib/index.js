import React from "react";
import "./index.css";

function Modal({ closeModal, text, styleModalBody, styleButton, styleText }) {
  return (
    <div className="modal">
      <div style={styleModalBody} className="modal-body">
        <button
          style={styleButton}
          className="modal-button"
          onClick={closeModal}>
          X
        </button>
        <p style={styleText} className="modal-text">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Modal;