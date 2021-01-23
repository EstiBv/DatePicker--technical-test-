import React from "react";

import Portal from "../Portal";
import "../../styles/Modal.scss";
// import PropTypes from 'prop-types'

class Modal extends React.Component {
  render() {
    const { children, handleModal, active } = this.props;
    return (
      <Portal>
        {active && (
          <div className="modalWrapper">
            <div className="modalWindow">
              <button className="modalBtn" onClick={handleModal}>
                👋🏼
              </button>
              <div>{children}</div>
              <div onClick={handleModal} className="modalBack"></div>
            </div>
          </div>
        )}
      </Portal>
    );
  }
}

export default Modal;
