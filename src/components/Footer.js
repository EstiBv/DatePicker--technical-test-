import { Fragment } from "react";
import "../styles/footer.scss";

const footer = () => {
  return (
    <Fragment>
      <nav className="footer">
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
        <small className="footer__copy">
          {" "}
          © Developed by Estíbaliz Barato with ❤︎{" "}
        </small>
      </nav>
    </Fragment>
  );
};
export default footer;
