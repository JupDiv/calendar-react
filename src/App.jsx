import React, { Component, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, onHandlerChangeData] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  return (
    <>
      <Header weekDates={weekDates} currentDay={weekStartDate} func={onHandlerChangeData} />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
