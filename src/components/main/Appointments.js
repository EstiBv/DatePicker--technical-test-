import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css";

function Appointments(props) {
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
}
export default Appointments;
