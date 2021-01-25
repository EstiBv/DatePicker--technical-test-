import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import Form from "./Form";

const WindowModal = (props) => {
  const handleCloseModal = () => {
    props.handleCloseModal();
    console.log("close");
  };
  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <Form
          handleModal={props.handleModal}
          textInput={props.textInput}
          handleInputChange={props.handleInputChange}
        />
        <div>
          <button onClick={handleCloseModal}>Cambiar fecha</button>
        </div>
      </Modal>
    </div>
  );
};

WindowModal.propTypes = {
  isOpen: PropTypes.bool,
  handleModal: PropTypes.func,
  textInput: PropTypes.string,
  handleInputChange: PropTypes.func,
};
export default WindowModal;
