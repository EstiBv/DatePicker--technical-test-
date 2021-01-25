import React from "react";
import "../../styles/Form.scss";
import PropTypes from "prop-types";

const Form = (props) => {
  // lifting to close modal
  const handleFormSubmit = (ev) => {
    props.handleCloseModal();
    ev.preventDefault();
  };

  // let dataAppointments = [];
  const handleInputs = (ev) => {
    props.handleInputChange(ev.target.value);
    console.log("¿recibes name?");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form">
        <label htmlFor="title" className="form__label">
          Nombre
        </label>
        <input
          type="text"
          name="text"
          id="title"
          className="form__input"
          onChange={handleInputs}
          value={props.textInput}
        />

        <label htmlFor="inicio" className="form__label">
          Hora Inicio
        </label>
        <input
          type="text"
          name="text"
          id="inicio"
          className="form__input"
          onChange={handleInputs}
          value={props.textInput}
        />

        <label htmlFor="fin" className="form__label">
          Hora Fin
        </label>
        <input
          type="text"
          name="text"
          id="fin"
          className="form__input"
          onChange={handleInputs}
          value={props.textInput}
        />
        {/* import date hours */}
        <button type="submit" className="form__button">
          Confirmar
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  textInput: PropTypes.string,
};

export default Form;
