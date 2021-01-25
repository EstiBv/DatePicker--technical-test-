import { Fragment } from "react";
import "../styles/Footer.scss";

const footer = () => {
  return (
    <Fragment>
      <nav className="footer">
        <ul className="footer__list">
          <li>
            <a href="_#" className="footer__list--link">
              Home
            </a>
          </li>
          <li>
            <a href="_#" className="footer__list--link">
              About us
            </a>
          </li>
          <li>
            <a href="_#" className="footer__list--link">
              Contact
            </a>
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
