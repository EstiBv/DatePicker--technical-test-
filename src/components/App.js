import React from "react";
import { useState } from "react";
import "../styles/App.scss";
// dataJson witch appointments
import Dates from "../services/data.json";
// library
import Modal from "react-modal";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/es";
// components
import Header from "./Header";
import WindowModal from "./main/WindowModal";
import Calendar from "./main/Calendar";
import Appointments from "./main/Appointments";
import Footer from "./Footer";

// include accesibity for modal, so define element modal import
Modal.setAppElement("#root");

const App = () => {
  // states
  const [appointments, setAppointments] = useState([Dates]);
  console.log(appointments);
  const [selectDay, setSelectDay] = useState(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [locale, setLocale] = useState("es");

  // useEffect for render data

  // events

  // const handleAppointments = (inputValue) => {
  //   setAppointments();
  // };

  const handleDay = (day) => {
    setSelectDay(day.toLocaleDateString());
  };

  const handleModal = () => {
    setModalIsOpen(true);
  };
  // submit and close Modale
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (inputNameValue) => {
    setTextInput(inputNameValue);
    console.log("recibo name");
    localStorage.setItem("client", inputNameValue);
  };

  const handleLocale = () => {
    setLocale();
    console.log();
  };

  // data client from json
  const datesClients = Dates.map((client) => {
    return client.name;
  });

  // render appointments
  function renderDay(day) {
    const date = day.getDate();
    const appointmentsStyle = {
      fontSize: "0.6em",
      textAlign: "center",
      display: "flex",
      color: "#163172",
    };

    return (
      <div>
        <div>{date}</div>
        {datesClients[date] &&
          datesClients[date].map((name, i) => (
            <div key={i} style={appointmentsStyle}>
              {name} ☑️
            </div>
          ))}
      </div>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <main className="mainContainer">
        <Calendar
          selectDay={selectDay}
          handleDay={handleDay}
          localeUtils={MomentLocaleUtils}
          locale={locale}
          handleLocale={handleLocale}
          onClick={handleModal}
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
        <Appointments
          appointments={appointments}
          canChangeMonth={false}
          className="calendarAppointments"
          renderDay={renderDay}
        />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
