import React from "react";
import Modal from "react-modal";
import Form from "./Form";

const WindowModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <Form
          handleModal={props.handleModal}
          textInput={props.textInput}
          handleInputChange={props.handleInputChange}
        />
      </Modal>
    </div>
  );
};
export default WindowModal;
