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
// import Time from "./Time";

// include accesibity for modal, so define element modal import
Modal.setAppElement("#root");

const App = () => {
  // states
  const [appointments, setAppointments] = useState([Dates]);
  console.log(appointments);
  const [selectDay, setSelectDay] = useState(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [textInputName, setTextInputName] = useState("");
  const [textInputHourInit, setTextInputHourInit] = useState("");
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
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  // set LocalStorage value from inputs text form,
  //   const handleInputSubmit = () => {
  //      localStorage.setItem("client", inputValue);
  // }

  const handleInputChange = (inputNameValue, inputHoursInitValue) => {
    setTextInputName(inputNameValue);
    setTextInputHourInit(inputHoursInitValue);
    console.log("recibo name");
    // console.log("recibo hora ");
    localStorage.setItem("client", inputNameValue, inputHoursInitValue);
  };

  // const handleInputHourInit = (inputHourInitValue) => {
  //   setTextInputHourInit(inputHourInitValue);
  //   console.log("recibo hora 1");
  // };

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
            textInputName={textInputName}
            textInputHourInit={textInputHourInit}
            handleInputChange={handleInputChange}
            // handleInputHourInit={handleInputHourInit}
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
