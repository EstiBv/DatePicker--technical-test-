import React from "react";
import { useState } from "react";
// styles
import "../styles/app.scss";
// dataJson
import Dates from "../services/data.json";
// libraries
import Modal from "react-modal";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/es";
// components
import Header from "./Header";
import WindowModal from "./main/WindowModal";
import Calendar from "./main/Calendar";
import Schedule from "./main/Schedule";
import Footer from "./Footer";

// include access for modal, so define element modal import
Modal.setAppElement("#root");

const App = () => {
  // states
  const [selectDay, setSelectDay] = useState(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [hourInitial, setHourInitial] = useState("");
  const [hourFinal, setHourFinal] = useState("");
  const [locale, setLocale] = useState("Es");

  // dates from json
  const appointments = Dates;

  // EVENTS
  /* 1 -> turn into day a string 2 -> delete slash from string 3 -> select day from calendar | 4 -> set in LocalStorage */
  const handleDay = (day) => {
    const dayString = day.toLocaleDateString();
    setSelectDay(dayString);

    const selectDayArray = dayString.split("/");

    const chosenDay = selectDayArray[0];
    console.log(chosenDay);
    localStorage.setItem("day", dayString);

    // solution close modal
    handleModal();
  };

  // Inputs value from the form and set data into LocalStorage
  const handleInputChange = (inputNameValue) => {
    setTextInput(inputNameValue);
    localStorage.setItem("Client", inputNameValue);
  };
  const handleInputHoursInitial = (inputHourInitialValue) => {
    setHourInitial(inputHourInitialValue);
    localStorage.setItem("hourInitial", inputHourInitialValue);
  };

  const handleInputFinalHours = (inputFinalHourslValue) => {
    setHourFinal(inputFinalHourslValue);
    localStorage.setItem("finalHour", inputFinalHourslValue);
  };

  // handle to change local hour (change the value at inital state, ej: "it" from italy )
  const handleLocale = () => {
    setLocale();
  };

  // open modal (initial state is false)
  const handleModal = () => {
    setModalIsOpen(true);
  };
  // close modale and get data from LocalSorage
  const handleCloseModal = () => {
    setModalIsOpen(false);
    savedAppointments();
  };

  /* JSON  1 -> Get data saved from the form and day selected 
  2 -> push dates into array Dates (new object into appointments) */
  const savedAppointments = () => {
    let nameClient = localStorage.getItem("Client");
    let hourInitial = localStorage.getItem("hourInitial");
    let finalHour = localStorage.getItem("finalHour");
    let day = localStorage.getItem("day");

    const object = {
      name: nameClient,
      hourInitial: hourInitial,
      finalHour: finalHour,
      day: day,
    };

    appointments.push(object);
  };

  // RENDER > render appointments on the second date picker
  function renderDay(day) {
    const clickedDay = day.getDate();
    // months array begin to 0
    const month = day.getMonth() + 1;
    const year = day.getFullYear();
    const date = clickedDay + "/" + month + "/" + year;
    const appointmentsStyle = {
      fontSize: "14px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "var(--medium2)",
      boxShadow: "2px 2px 3px var(--dark1)",
      borderRadius: "5px",
      marginTop: "2px",
    };

    return (
      <div>
        <div
          style={
            selectDay && selectDay === date
              ? {
                  fontSize: "x-large",
                  color: "#e5ffff",
                  backgroundColor: "var(--dark1)",
                  borderRadius: "50%",
                  padding: "4px",
                  boxShadow: "2px 2px 3px var(--basicDark)",
                }
              : null
          }
        >
          {clickedDay}
        </div>
        {/* filter and mapping Dates and selected day  */}
        {appointments
          .filter((appointment) => appointment.day === date)
          .map((appointment, i) => {
            return (
              <div key={i} style={appointmentsStyle}>
                <div>
                  ︎<div>{appointment.name}</div>
                  <div>
                    <sup className="supDay"> 🕛 {appointment.hourInitial} </sup>{" "}
                    <sup className="supDay">➡ {appointment.finalHour} </sup>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <React.Fragment>
      <header className="headerContainer">
        <Header />
      </header>
      <main className="mainContainer">
        <Calendar
          selectDay={selectDay}
          handleDay={handleDay}
          localeUtils={MomentLocaleUtils}
          locale={locale}
          handleLocale={handleLocale}
          onClick={handleModal}
        />
        <section className="modalContainer">
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
        <Schedule
          localeUtils={MomentLocaleUtils}
          locale={locale}
          appointments={appointments}
          canChangeMonth={true}
          renderDay={renderDay}
        />
      </main>
      <footer className="containerFooter">
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
