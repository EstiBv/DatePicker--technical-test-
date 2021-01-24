import React from "react";
import "../styles/App.scss";
import { useState } from "react";
// components
import Header from "./Header";
import Modal from "./main/Modal";
import Calendar from "./main/Calendar";
import Aside from "./main/Aside";
import Footer from "./Footer";
// import Form from "./main/Form";

const App = () => {
  // states
  const [active, setActive] = useState(false);
  // const [selectDay, setSelectDay] = useState(undefined);

  // events

  const handleModal = () => {
    setActive(!active);
    // setSelectDay(day.toLocaleDateString());
  };

  return (
    <React.Fragment>
      <Header />
      <main className="mainContainer">
        <Calendar handleModal={handleModal} />
        <Modal active={active} handleModal={handleModal}>
          {" "}
          Hello modal
        </Modal>
        <button onClick={handleModal}>Open modal</button>
        <Aside />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
