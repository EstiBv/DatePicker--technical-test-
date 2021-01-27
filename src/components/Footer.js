import { Fragment } from "react";
import "../styles/Footer.scss";

const footer = () => {
  return (
    <Fragment>
      {/* <nav className="footer">
        <ul className="footer__list">
          <li>
            <div>
              <a href="_#" className="footer__list--link">
                Inicio
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="_#" className="footer__list--link">
                Proyectos
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="_#" className="footer__list--link">
                Contacto
              </a>
            </div>
          </li>
        </ul>
      </nav> */}
      <div className="containerFooter__copy">
        <small className="containerFooter--signed">
          {" "}
          © Developed by Estíbaliz Barato with ❤︎{" "}
        </small>
      </div>
    </Fragment>
  );
};
export default footer;
