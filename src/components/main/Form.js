import React from "react";
import "../../styles/Form.scss";

const Form = (props) => {
  // lifting to close modal
  const handleFormSubmit = (ev) => {
    props.handleCloseModal();
    ev.preventDefault();
  };

  // let dataAppointments = [];
  const handleInputName = (ev) => {
    props.handleInputChange(ev.target.value);
    console.log("¿recibes name?");
    // let inputValue = dataAppointments.push(ev.target.value);
  };

  const handleInputHourInit = (ev) => {
    props.handleInputChange(ev.target.value);
    // props.handleInputHourInit(ev.target.value);
    console.log(ev, "¿recibes hora 1?");
  };

  // const handleInputHourEnd = (ev) => {
  //   props.handleInputChange(ev.target.value);
  //   console.log("¿recibes hora 2?");
  // };

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
          onChange={handleInputName}
          value={props.textInputName}
        />

        <label htmlFor="inicio" className="form__label">
          Hora Inicio
        </label>
        <input
          type="text"
          name="text"
          id="inicio"
          className="form__input"
          onChange={handleInputHourInit}
          value={props.textInputHourInit}
        />

        <label htmlFor="fin" className="form__label">
          Hora Fin
        </label>
        <input
          type="text"
          name="text"
          id="fin"
          className="form__input"
          // onChange={handleInputHourEnd}
        />
        {/* import date hours */}
        <button type="submit" className="form__button">
          Confirmar
        </button>
      </form>
    </>
  );
};

export default Form;
