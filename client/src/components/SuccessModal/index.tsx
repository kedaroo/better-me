import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Logo from "../../assets/logo.png"

export default function SuccessModal({maxWidth = "450px" }) {
  return ReactDOM.createPortal(
    <div className="modal-background" aria-hidden="true">
      <div className="modal" style={{ maxWidth }}>
        <div className="modal-content">

          <div className="txt-dark-gray lh-md modal-children content">
            <img src={Logo} alt="logo" />
            <h2>Success!</h2>
            <p>Progress marked successfully!</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
