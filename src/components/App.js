import React from "react";
import { useState } from "react";
import "../styles/App.scss";
// library
import Modal from "react-modal";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/es";
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
  const [locale, setLocale] = useState("es");
  // events
  const handleDay = (day) => {
    setSelectDay(day.toLocaleDateString());
  };

  const handleModal = () => {
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (inputValue) => {
    setTextInput(inputValue);
    console.log("recibo");
  };

  const handleLocale = () => {
    setLocale();
    console.log();
  };
  return (
    <React.Fragment>
      <Header />
      <main className="mainContainer">
        <Calendar
          selectDay={selectDay}
          handleDay={handleDay}
          onClick={handleModal}
          localeUtils={MomentLocaleUtils}
          locale={locale}
          handleLocale={handleLocale}
        />
        <section>
          <div>
            <button onClick={handleModal}>Confirmar abrir modal</button>
          </div>
          <WindowModal
            isOpen={modalIsOpen}
            textInput={textInput}
            handleInputChange={handleInputChange}
            handleCloseModal={handleCloseModal}
          ></WindowModal>
        </section>
        <Aside />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
