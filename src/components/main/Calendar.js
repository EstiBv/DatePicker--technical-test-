import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "../../styles/App.scss";

const Calendar = (props) => {
  // lifting : listen day selected

  const handleDayClick = (day) => {
    props.handleDay(day);
    console.log(day);
  };

  // locale

  return (
    <React.Fragment>
      <div className="containerDate"></div>
      <DayPicker
        onDayClick={handleDayClick}
        selectDay={props.selectDay}
        localeUtils={props.localeUtils}
        locale={props.locale}
      />
    </React.Fragment>
  );
};

export default Calendar;
