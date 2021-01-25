import React, { useEffect } from "react";
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

  // useEffect for render data ¿*?
  useEffect(() => {
    setAppointments([Dates]);
  }, []);

  // EVENTS
  const handleDay = (day) => {
    setSelectDay(day.toLocaleDateString());
  };

  const handleModal = () => {
    setModalIsOpen(true);
  };

  // Close Modale and get data from LocalSorage
  const handleCloseModal = () => {
    setModalIsOpen(false);
    savedAppointments();
  };

  // form Inputs and set data into LocalStorage
  const handleInputChange = (inputNameValue) => {
    setTextInput(inputNameValue);
    console.log("recibo name");
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

  // JSON Get data saved from form and saved into [Dates] > json dates
  const savedAppointments = () => {
    let nameClient = localStorage.getItem("Client");
    let hourInitial = localStorage.getItem("HourInitial");
    let finalHour = localStorage.getItem("FinalHour");
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
  console.log(datesClients);

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
    const datesSaved = appointments.map((item) => {
      return item.nameClient;
    });

    return (
      <div>
        <div>{date}</div>
        {datesClients[date] &&
          datesClients[date].map((name, i) => (
            <div key={i} style={appointmentsStyle}>
              <div>
                {name} ︎✆ <span>{datesSaved}</span>
              </div>
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
          canChangeMonth={true}
          className="calendarAppointments"
          renderDay={renderDay}
        />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
