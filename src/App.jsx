import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, onHandlerChangeData] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [isOpen, onHandlerModalWind] = useState(false);
  return (
    <>
      <Header
        isOpen={onHandlerModalWind}
        currentDay={weekStartDate}
        onChangeDate={onHandlerChangeData}
      />
      <Calendar isClose={onHandlerModalWind} statusModalWindow={isOpen} weekDates={weekDates} />
    </>
  );
};

export default App;
