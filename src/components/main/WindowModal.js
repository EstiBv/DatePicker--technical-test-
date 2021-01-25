import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import "../../styles/form.scss";
import Form from "./Form";

const WindowModal = (props) => {
  const closeModal = () => {
    // let close = props.isOpen ? false : null
    props.handleCloseModal();

    console.log("close");
  };
  let hola = props.isOpen;
  console.log(hola, props.isOpen);

  return (
    <div className="none">
      <Modal isOpen={props.isOpen}>
        <Form
          // handleModal={props.handleModal}
          textInput={props.textInput}
          hourInitial={props.hourInitial}
          hourFinal={props.hourFinal}
          handleInputChange={props.handleInputChange}
          handleInputHoursInitial={props.handleInputHoursInitial}
          handleInputFinalHours={props.handleInputFinalHours}
        />
        <div>
          <button onClick={closeModal} className="form__btn--modal">
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
