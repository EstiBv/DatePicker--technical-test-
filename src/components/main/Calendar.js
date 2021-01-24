import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import "../../styles/App.scss";

const Calendar = (props) => {
  // lifting : listen day selected
  const handleDay = (day) => {
    props.handleDay(day);
    console.log(day);
  };

  return (
    <React.Fragment>
      <div className="containerDate">
        <DayPicker onDayClick={handleDay} selectDay={props.selectDay} />
      </div>
    </React.Fragment>
  );
};

export default Calendar;
