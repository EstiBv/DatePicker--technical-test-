import React, { useEffect } from "react";
import { useState } from "react";
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

// include accesibity for modal, so define element modal import
Modal.setAppElement("#root");

const App = () => {
  // states
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);
  const [selectDay, setSelectDay] = useState(undefined);
  let [modalIsOpen, setModalIsOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [hourInitial, setHourInitial] = useState("");
  const [hourFinal, setHourFinal] = useState("");
  const [locale, setLocale] = useState("Es");

  // useEffect for render data ¿*??
  useEffect(() => {
    setAppointments([]);
  }, []);

  // EVENTS
  const handleDay = (day) => {
    setSelectDay(day.toLocaleDateString());
  };

  // open modal
  // const handleModal = () => {
  //   setModalIsOpen(true);
  // };

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
    setAppointments(
      [
        ...Dates,
        {
          nameClient,
          hourInitial,
          finalHour,
        },
      ]
      // .push(Dates)
    );
    console.log(nameClient, hourInitial, finalHour);
  };

  // mapping dates clients from json for paint in render
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
      margin: "4px 0px 4px 0px",
    };

    const nameSaved = appointments.map((item) => {
      return item.nameClient;
    });

    const initialHourSaved = appointments.map((item) => {
      return item.hourInitial;
    });
    const finalHourSaved = appointments.map((item) => {
      return item.finalHour;
    });
    return (
      <div>
        <div>{date}</div>
        {datesClients[date] &&
          datesClients[date].map((name, i) => (
            <div key={i} style={appointmentsStyle}>
              <div>
                {name} ︎✆ <span>{nameSaved}</span>
              </div>
            </div>
          ))}
        {initialHourSaved} {finalHourSaved}
      </div>
    );
  }

  //  selectDay={selectDay ? (modalIsOpen = true) : null}
  return (
    <React.Fragment>
      <Header className="headerContainer" />
      <main className="mainContainer">
        <Calendar
          selectDay={selectDay ? (modalIsOpen = true) : null}
          handleDay={handleDay}
          localeUtils={MomentLocaleUtils}
          locale={locale}
          handleLocale={handleLocale}
          // onClick={handleModal}
        />
        <section>
          {/* <div>
            <button onClick={handleModal} className="btn__openModal">
              Añadir evento
            </button>
          </div> */}
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
      <Footer />
    </React.Fragment>
  );
};

export default App;
