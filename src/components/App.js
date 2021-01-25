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
  const [hourInitial, setHourInitial] = useState("");
  const [hourFinal, setHourFinal] = useState("");
  const [locale, setLocale] = useState("es");

  // useEffect for render data

  // const handleAppointments = (inputValue) => {
  //   setAppointments();
  // };

  // EVENTS
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

  // form Inputs and set data into LocalStorage
  const handleInputChange = (inputNameValue) => {
    setTextInput(inputNameValue);
    console.log("recibo name");
    localStorage.setItem("client", inputNameValue);
  };
  const handleInputHoursInitial = (inputHourInitialValue) => {
    setHourInitial(inputHourInitialValue);
    console.log(inputHourInitialValue);
    localStorage.setItem("Hour initial", inputHourInitialValue);
  };

  const handleInputFinalHours = (inputFinalHourslValue) => {
    setHourFinal(inputFinalHourslValue);
    localStorage.setItem("Final hour", inputFinalHourslValue);
  };

  // posibility to change local hour inital datapicker
  const handleLocale = () => {
    setLocale();
  };

  // JSON > data client from json
  const datesClients = Dates.map((client) => {
    return client.name;
  });

  // RENDER > render appointments second datapicker
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
              {name}
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
            hourInitial={hourInitial}
            hourFinal={hourFinal}
            handleInputChange={handleInputChange}
            handleInputHoursInitial={handleInputHoursInitial}
            handleInputFinalHours={handleInputFinalHours}
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
