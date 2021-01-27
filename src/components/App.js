import React from "react";
import { useState } from "react";
// styles
import "../styles/app.scss";
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
import Schedule from "./main/Schedule";
import Footer from "./Footer";

// include accesibilyty for modal, so define element modal import
Modal.setAppElement("#root");

const App = () => {
  // states
  //const [appointments, setAppointments] = useState(Dates);

  const [selectDay, setSelectDay] = useState(undefined);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [hourInitial, setHourInitial] = useState("");
  const [hourFinal, setHourFinal] = useState("");
  const [locale, setLocale] = useState("Es");

  const appointments = Dates;

  // EVENTS

  const handleDay = (day) => {
    const dayString = day.toLocaleDateString();
    setSelectDay(dayString);
    const selectDayArray = dayString.split("/");
    const chosenDay = selectDayArray[0];
    console.log(chosenDay);
    localStorage.setItem("day", dayString);
    handleModal();
  };

  // form Inputs and set data into LocalStorage
  const handleInputChange = (inputNameValue) => {
    setTextInput(inputNameValue);
    console.log(inputNameValue);
    localStorage.setItem("Client", inputNameValue);
  };
  const handleInputHoursInitial = (inputHourInitialValue) => {
    setHourInitial(inputHourInitialValue);
    console.log(inputHourInitialValue);
    localStorage.setItem("hourInitial", inputHourInitialValue);
  };

  const handleInputFinalHours = (inputFinalHourslValue) => {
    setHourFinal(inputFinalHourslValue);
    localStorage.setItem("finalHour", inputFinalHourslValue);
  };

  // posibility to change local hour inital datapicker
  const handleLocale = () => {
    setLocale();
  };

  // open modal
  const handleModal = () => {
    setModalIsOpen(true);
  };
  // close modale and get data from LocalSorage
  const handleCloseModal = () => {
    setModalIsOpen(false);
    savedAppointments();
    /* le está llegando como indefinido por eso creo que no se cierra*/
    console.log(setModalIsOpen(false));
  };

  // JSON Get data saved from form and saved into [Dates] > json dates
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

    console.log(appointments);
    console.log(nameClient, hourInitial, finalHour);
  };

  // mapping dates clients from json for paint in render

  // RENDER > render appointments second datapicker
  function renderDay(day) {
    const clickedDay = day.getDate();
    const month = day.getMonth() + 1;
    const year = day.getFullYear();
    const date = clickedDay + "/" + month + "/" + year;
    const appointmentsStyle = {
      fontSize: "14px",
      textAlign: "center",
      // display: "flex",
      // flexDirection: "column",
      backgroundColor: "var(--medium2)",
      boxShadow: "2px 2px 3px var(--dark1)",
      borderRadius: "5px",
      // color: "#163172",
      // margin: "0px 0px 4px 0px",
    };

    // console.log(appointments);

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

        {appointments
          .filter((appointment) => appointment.day === date)
          .map((appointment, i) => {
            return (
              <div key={i} style={appointmentsStyle}>
                <div>
                  ︎<div>{appointment.name}</div>
                  <div>
                    <sup className="supDay"> ⏳ {appointment.hourInitial} </sup>{" "}
                    <sup> {appointment.finalHour} </sup>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  //  selectDay={selectDay ? (modalIsOpen = true) : null}
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
