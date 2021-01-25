import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import PropTypes from "prop-types";

const Appointments = (props) => {
  const datesSaved = props.appointments.map((item, i) => {
    return <li key={i}>{item.nameClient}</li>;
  });
  console.log(datesSaved, props.appointments);
  return (
    <article>
      <DayPicker
        appointments={datesSaved}
        canChangeMonth={props.canChangeMonth}
        className="Appoinmets"
        renderDay={props.renderDay}
      />
      <ul>{datesSaved}</ul>
    </article>
  );
};

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired,
  canChangeMonth: PropTypes.bool,
  renderDay: PropTypes.func,
};

export default Appointments;
