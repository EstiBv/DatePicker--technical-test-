import React from "react";
import "../../styles/Form.scss";
const Form = () => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.preventDefault(), "default");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form">
        <label htmlFor="title" className="form__label">
          Título del evento
        </label>
        <input type="text" name="text" id="title" className="form__input" />

        <label htmlFor="inicio" className="form__label">
          Hora Inicio
        </label>
        <input type="text" name="text" id="inicio" className="form__input" />

        <label htmlFor="fin" className="form__label">
          Hora Fin
        </label>
        <input type="text" name="text" id="fin" className="form__input" />
        {/* import date hours */}
        <input type="submit" value="Guardar" className="form__button" />
      </form>
    </>
  );
};

export default Form;
