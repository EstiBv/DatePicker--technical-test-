import React from "react";

const Form = () => {
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.preventDefault(), "default");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form">
        <label htmlFor="title">Título</label>
        <input type="text" name="text" id="title" />

        <label htmlFor="title">Hora Inicio</label>
        <input type="text" name="text" id="inicio" />

        <label htmlFor="title">Hora Fin</label>
        <input type="text" name="text" id="fin" />
        {/* import date hours */}
        <input type="submit" value="Guardar" />
      </form>
    </>
  );
};

export default Form;
