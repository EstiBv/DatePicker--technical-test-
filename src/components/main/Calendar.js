import React from "react";
import DayPicker from "react-day-picker";
import PropTypes from "prop-types";
import "react-day-picker/lib/style.css";
import "../../styles/app.scss";
import "../../styles/calendar.scss";

const Calendar = (props) => {
  // lifting : listen day selected

  const handleDayClick = (day) => {
    props.handleDay(day);
  };

  const daySelected = props.selectDay;

  return (
    <React.Fragment>
      <div className="containerCalendar">
        <div className="containerBackCalendar">
          <DayPicker
            className="containerCalendar__dayPicker"
            onDayClick={handleDayClick}
            selectDay={props.selectDay}
            localeUtils={props.localeUtils}
            locale={props.locale}
            disabledDays={[new Date(), { daysOfWeek: [0, 6] }]}
            renderDay={props.renderDay}
            canChangeMonth={props.canChangeMonth}
          />
        </div>
        <div className="containerBackCalendar__texts">
          <p className="containerBackCalendar__text--selectDay">
            Selecciona un día{" "}
          </p>
          <p className="containerCalendar__text--selectedDay">
            {" "}
            {daySelected ? `Has seleccionado ${daySelected}` : ""}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

Calendar.propTypes = {
  onDayClick: PropTypes.func,
  // selectDay: PropTypes.string,
  locale: PropTypes.string,
  localeUtils: PropTypes.object,
  disabledDays: PropTypes.array,
};

export default Calendar;
