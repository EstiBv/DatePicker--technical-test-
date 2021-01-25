import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import "../../styles/Form.scss";
import Form from "./Form";

const WindowModal = (props) => {
  const handleCloseModal = () => {
    props.handleCloseModal();

    console.log("close");
  };
  let hola = props.isOpen;
  console.log(hola, props.isOpen);

  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <Form
          handleModal={props.handleModal}
          textInput={props.textInput}
          hourInitial={props.hourInitial}
          hourFinal={props.hourFinal}
          handleInputChange={props.handleInputChange}
          handleInputHoursInitial={props.handleInputHoursInitial}
          handleInputFinalHours={props.handleInputFinalHours}
        />
        <div>
          <button onClick={handleCloseModal} className="form__btn--modal">
            Confirmar
          </button>
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
