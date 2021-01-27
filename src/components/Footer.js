import { Fragment } from "react";
import "../styles/Footer.scss";

const footer = () => {
  return (
    <Fragment>
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
