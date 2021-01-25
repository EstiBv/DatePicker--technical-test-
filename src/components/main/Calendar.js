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
    console.log(day);
  };

  return (
    <React.Fragment>
      <div className="containerCalendar">
        <div>
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
        <div>
          <p className="containerCalendar__text">Selecciona un día </p>
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
