import React from "react";
import "../styles/App.scss";
import { useState } from "react";
// components
import Header from "./Header";
import Modal from "./main/Modal";
import Calendar from "./main/Calendar";
import Aside from "./main/Aside";
import Footer from "./Footer";

function App() {
  // states
  const [active, setActive] = useState(false);

  // events
  const handleModal = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <Header />
      <main className="mainContainer">
        <Aside />
        <Calendar />
        <Modal active={active} handleModal={handleModal}>
          {" "}
          Hello modal
        </Modal>
        <button onClick={handleModal}>Open modal</button>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
