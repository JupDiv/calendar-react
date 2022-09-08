import React, { useState, useEffect } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchTasksList } from '../../gateway/events';
import propTypes from 'prop-types';

import './calendar.scss';
import Modal from '../modal/Modal';

const Calendar = ({ weekDates, statusModalWindow, isClose }) => {
  const [eventsList, updateEventsList] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetchTasksList().then(resp => {
      updateEventsList(resp);
    });
  };

  const copyFixDateArray = eventsList.map(({ dateFrom, dateTo, ...other }) => ({
    ...other,
    dateFrom: new Date(dateFrom),
    dateTo: new Date(dateTo),
  }));

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          {statusModalWindow ? <Modal onUpdateListTasks={fetchTasks} isClose={isClose} /> : null}
          <Week onUpdateListTasks={fetchTasks} weekDates={weekDates} events={copyFixDateArray} />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: propTypes.array.isRequired,
  statusModalWindow: propTypes.bool.isRequired,
  isClose: propTypes.func.isRequired,
};

export default Calendar;
