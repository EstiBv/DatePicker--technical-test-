import React from "react";

// portal nodo selected
const portalRoot = document.getElementById("portal");

class Portal extends React.Component {
  // create div to render portal
  constructor() {
    super();
    this.element = document.createElement("div");
  }

  // add children when the component is mount
  componentDidMount = () => {
    portalRoot.appendChild(this.element);
  };
  // delete children
  componentWillUnmount = () => {
    portalRoot.removeChild(this.element);
  };

  render() {
    const { children } = this.props;
    // render contain's children inside to html
    return children;
  }
}

export default Portal;
