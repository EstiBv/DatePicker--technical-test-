import React from "react";
import "../styles/landing.scss";
import img from "../images/illuSchedule.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <main className="containerLanding container-fluid">
        <article className="containerLanding__article">
          <h1 className="containerLanding__title">
            {" "}
            <span className="containerLanding__title--span">Organize</span>{" "}
            yourself
          </h1>
          <p className="containerLanding__text">
            Añade las citas importantes en tu calendario. Escoge un día y
            selecciona el margen horario.{" "}
          </p>
          <Link to="/schedule">
            <button className="containerLanding__btnStart">Go</button>
          </Link>
        </article>
        <img
          src={img}
          alt="illustration girl with mobile"
          className="containerLanding__imgLanding"
        />
      </main>
    </>
  );
};

export default Landing;
