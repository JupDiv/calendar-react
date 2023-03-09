import React, { useState, useEffect } from 'react';
import { getWeekStartDate } from '../../utils/dateUtils';
import propTypes from 'prop-types';
import moment from 'moment';
moment.locale('en-gb');

import './header.scss';

const Header = ({ currentDay, onChangeDate, isOpen }) => {
  const [time, onUpdateTime] = useState(moment(new Date()).format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      onUpdateTime(moment(new Date()).format('LTS'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentMonth = moment(getWeekStartDate(currentDay)).format('MMM');
  const nextMonth = moment(getWeekStartDate(currentDay)).add(1, 'M').format('MMM');

  const month =
    getWeekStartDate(currentDay).getDate() >= 24
      ? `${currentMonth} - ${nextMonth}`
      : `${currentMonth}`;

  return (
    <>
      <header className="header">
        <button className="button button_create-task create-event-btn">
          <svg className="button_create-task-icon" width="28" height="28" viewBox="0 0 36 36">
            <path fill="#34A853" d="M16 16v14h4V20z"></path>
            <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
            <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
            <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>
          <span className="button_create-task-text" onClick={() => isOpen(true)}>
            Create
          </span>
        </button>
        <div className="navigation">
          <button className="navigation__today-btn button" onClick={() => onChangeDate(new Date())}>
            Today
          </button>
          <button className="icon-button navigation__nav-icon">
            <i
              className="fas fa-chevron-left"
              onClick={() =>
                onChangeDate(
                  new Date(
                    getWeekStartDate(currentDay).setDate(
                      getWeekStartDate(currentDay).getDate() - 7,
                    ),
                  ),
                )
              }
            ></i>
          </button>
          <button className="icon-button navigation__nav-icon">
            <i
              className="fas fa-chevron-right"
              onClick={() =>
                onChangeDate(
                  new Date(
                    getWeekStartDate(currentDay).setDate(
                      getWeekStartDate(currentDay).getDate() + 7,
                    ),
                  ),
                )
              }
            ></i>
          </button>
          <span className="navigation__displayed-month">{month}</span>
        </div>
        <div className="clock">{time}</div>
      </header>
      <hr className="header-line" />
    </>
  );
};

Header.propTypes = {
  currentDay: propTypes.instanceOf(Date),
  onChangeDate: propTypes.func.isRequired,
  isOpen: propTypes.func.isRequired,
};

export default Header;
