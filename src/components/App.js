import React from "react";
import "../styles/App.scss";
import { useState } from "react";
import Modal from "react-modal";

// components
import Header from "./Header";
import WindowModal from "./main/WindowModal";
import Calendar from "./main/Calendar";
import Aside from "./main/Aside";
import Footer from "./Footer";

// include accesibity for modal, so define element modal import
Modal.setAppElement("#root");

const App = () => {
  // states
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [selectDay, setSelectDay] = useState(undefined);

  // events
  const handleDay = (day) => {
    setSelectDay(day.toLocaleDateString());
  };

  const handleModal = () => {
    setModalIsOpen(true);
  };

  const handleInputChange = (inputValue) => {
    setTextInput(inputValue);
    console.log("recibo");
  };

  return (
    <React.Fragment>
      <Header />
      <main className="mainContainer">
        <Calendar selectDay={selectDay} handleDay={handleDay} />
        <section>
          <button onClick={handleModal}>Confirmar</button>
          <WindowModal
            isOpen={modalIsOpen}
            textInput={textInput}
            handleInputChange={handleInputChange}
          ></WindowModal>
        </section>
        <Aside />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
