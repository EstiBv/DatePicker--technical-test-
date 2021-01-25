import React from "react";
import DayPicker from "react-day-picker";
import PropTypes from "prop-types";
import "react-day-picker/lib/style.css";
import "../../styles/App.scss";

const Calendar = (props) => {
  // lifting : listen day selected

  const handleDayClick = (day) => {
    props.handleDay(day);
    console.log(day);
  };

  return (
    <React.Fragment>
      <div className="containerDate"></div>
      <DayPicker
        onDayClick={handleDayClick}
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

Calendar.propTypes = {
  onDayClick: PropTypes.func,
  selectDay: PropTypes.object,
  locale: PropTypes.string,
  localeUtils: PropTypes.object,
  disabledDays: PropTypes.array,
};

export default Calendar;
