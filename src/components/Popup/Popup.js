import React from "react";
import "./Popup.css";

export const Popup = ({ isOpen, onClose, title, text }) => {
 
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          aria-label="Закрыть"
          type="button"
          className="popup__close-btn transparent-button"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <p className="popup__text">{text}</p> 
      </div>
    </div>
  );
}
