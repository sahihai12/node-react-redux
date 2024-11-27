import { CgCloseO } from "react-icons/cg";
import React from "react";
import "./modal.css";

const Modal = ({ children, changeShow }) => {
  return (
    <section className="popup_wrapper">
      <div className="overlay"></div>
      <div className="popup_body">
        <div className="popup_width">
          <div className="close_btn" onClick={() => changeShow()}>
            <CgCloseO className="primary" />
          </div>
          <div className="content card_bg p-4 md:p-6">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
