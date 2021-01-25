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
  // const handleSelectedDay = (day, { selected }) => {
  //   props.handleSelectedDay(day, { selected });
  // };

  return (
    <React.Fragment>
      <div className="containerDate"></div>
      <DayPicker
        onDayClick={handleDayClick}
        // onDayClick={handleSelectedDay}
        selectDay={props.selectDay}
        localeUtils={props.localeUtils}
        locale={props.locale}
        disabledDays={[new Date(), { daysOfWeek: [0, 6] }]}
        renderDay={props.renderDay}
        canChangeMonth={props.canChangeMonth}
      />
    </React.Fragment>
  );
};

export default Calendar;
