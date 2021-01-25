import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "../../styles/schedule.scss";
import PropTypes from "prop-types";

const Schedule = (props) => {
  return (
    <section className="containerSchedule">
      <DayPicker
        localeUtils={props.localeUtils}
        locale={props.locale}
        appointments={props.appointments}
        canChangeMonth={props.canChangeMonth}
        className="schedule"
        renderDay={props.renderDay}
        disabledDays={[new Date(), { daysOfWeek: [0, 6] }]}
      />
    </section>
  );
};

Schedule.propTypes = {
  appointments: PropTypes.array.isRequired,
  canChangeMonth: PropTypes.bool,
  renderDay: PropTypes.func,
};

export default Schedule;
