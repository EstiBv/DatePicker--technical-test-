import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import PropTypes from "prop-types";

const Appointments = (props) => {
  return (
    <article>
      <DayPicker
        appointments={props.appointments}
        canChangeMonth={props.canChangeMonth}
        className="Appoinmets"
        renderDay={props.renderDay}
      />
    </article>
  );
};

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired,
  canChangeMonth: PropTypes.bool,
  renderDay: PropTypes.func,
};

export default Appointments;
