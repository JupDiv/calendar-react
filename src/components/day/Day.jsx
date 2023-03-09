import React from 'react';
import Hour from '../hour/Hour';
import propTypes from 'prop-types';

import './day.scss';

const Day = ({ dataDay, dayEvents, onUpdateListTasks }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            onUpdateListTasks={onUpdateListTasks}
            dataDay={dataDay}
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: propTypes.number.isRequired,
  dayEvents: propTypes.array.isRequired,
  onUpdateListTasks: propTypes.func.isRequired,
};

export default Day;
