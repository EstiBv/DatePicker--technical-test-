import "../styles/Footer.scss";

const footer = () => {
  return (
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
    </nav>
  );
};
export default footer;
