import React, { useEffect, useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

import "../../styles/App.scss";

const Calendar = (props) => {
  // state
  const [selectDay, setSelectDay] = useState(undefined);
  console.log(selectDay);

  // component to clear dates
  useEffect(() => {
    const clickDay = selectDay;
    console.log(clickDay);
  });

  // event : listen day selected
  const handleDay = (day) => {
    setSelectDay(day.toLocaleDateString());
  };

  return (
    <React.Fragment>
      <div className="containerDate">
        <DayPicker
          onDayClick={handleDay ? props.handleModal : false}
          selectDay={selectDay}
        />
      </div>
    </React.Fragment>
  );
};

export default Calendar;
