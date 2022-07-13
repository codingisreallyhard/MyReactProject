import React from "react";
import classes from "./Modal.module.css";
const backDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return (
    <div>
      <ModalOverlay>{props.children}</ModalOverlay>
    </div>
  );
}

export default Modal;
