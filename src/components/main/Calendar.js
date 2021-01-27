import React from "react";
import DayPicker from "react-day-picker";
import PropTypes from "prop-types";
import "react-day-picker/lib/style.css";
import "../../styles/app.scss";
import "../../styles/calendar.scss";
import img from "../../images/2.png";

const Calendar = (props) => {
  // lifting : listen day selected
  const handleDayClick = (day) => {
    props.handleDay(day);
  };

  const daySelected = props.selectDay;

  return (
    <React.Fragment>
      <div className="containerCalendar">
        <div className="containerCalendar__dayPicker">
          <DayPicker
            className="containerCalendar__dayPicker--component"
            onDayClick={handleDayClick}
            selectDay={props.selectDay}
            localeUtils={props.localeUtils}
            locale={props.locale}
            disabledDays={[new Date(), { daysOfWeek: [0, 6] }]}
            renderDay={props.renderDay}
            canChangeMonth={props.canChangeMonth}
          />
        </div>
        <div className="containerCalendar__texts">
          <p className="containerCalendar__texts--selectDay">
            Selecciona un día{" "}
          </p>
          <p className="containerCalendar__texts--selectedDay">
            {" "}
            {daySelected ? `Has seleccionado ${daySelected}` : ""}
          </p>
        </div>
        <div className="containerCalendar__imgBox">
          <img
            src={img}
            alt="lamp draw"
            className="containerCalendar__imgBox--img"
          />
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
