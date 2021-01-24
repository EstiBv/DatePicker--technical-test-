import React from "react";
import "../../styles/Form.scss";
const Form = (props) => {
  // lifting to close modal
  const handleFormSubmit = (ev) => {
    // se cierra pero sigue dando error, mirar como cerrarlo bien
    props.handleCloseModal();
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    props.handleInputChange(ev.target.value);
    console.log("recibes?");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form">
        <label htmlFor="title" className="form__label">
          Título del evento
        </label>
        <input
          type="text"
          name="text"
          id="title"
          className="form__input"
          onChange={handleInput}
          value={props.textInput}
        />

        <label htmlFor="inicio" className="form__label">
          Hora Inicio
        </label>
        <input type="text" name="text" id="inicio" className="form__input" />

        <label htmlFor="fin" className="form__label">
          Hora Fin
        </label>
        <input type="text" name="text" id="fin" className="form__input" />
        {/* import date hours */}
        <input type="submit" value="Confirmar" className="form__button" />
      </form>
    </>
  );
};

export default Form;
