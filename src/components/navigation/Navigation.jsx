import React from 'react';
import propTypes from 'prop-types';
import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  const currentDate = new Date().getDate();

  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div key={dayDate.getDate()} className="calendar__day-label day-label">
          <span
            className={
              dayDate.getDate() === currentDate
                ? 'day-label__day-name day-label__day-name_current'
                : 'day-label__day-name'
            }
          >
            {days[dayDate.getDay()]}
          </span>
          <span
            className={
              dayDate.getDate() === currentDate
                ? 'day-label__day-number day-label__day-number_current'
                : 'day-label__day-number'
            }
          >
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: propTypes.array.isRequired,
};

export default Navigation;
