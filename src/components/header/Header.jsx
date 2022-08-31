import React, { useState, useEffect } from 'react';
import { months, getWeekStartDate } from '../../utils/dateUtils';
import moment from 'moment';

import './header.scss';

const Header = ({ weekDates, currentDay, func }) => {
  const [time, onUpdateTime] = useState(moment(new Date()).format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      onUpdateTime(moment(new Date()).format('LTS'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /*
  1.Получаем текущий месяц
    * Берем переданный массив недели
    * Через фильтр проходимся по массиву у элемениов дастаем день и справниваем с текущим днем
    * Если фильтре получили true то мы этот день возвращаем, точнее дату
    * Дату мы переводим в число месяца по JS январь 0 ... декабрь 11
    * Это число индекс массива которую присваеваем в переменную
  2.Получить текущих месяцы если мы попадаем на смену месяца
    * условие если к понедельнику прибавить 6 дней и месяц  будет больше  чем придыдущий 
   * то мы присваевываем в переменую месяц текущий и следующий
   * если месяц такойже присваевываем переменной текущий месяц
  */

  const currentMonth = new Date(
    weekDates.filter(elem => elem.getDay() === currentDay.getDay()),
  ).getMonth();

  const nextMonth = new Date(
    weekDates.filter((elem, index) => {
      if (elem.getDate() === 1 && index > 1) {
        return elem;
      }
    }),
  ).getMonth();

  const checkNextMonth = new Date(
    getWeekStartDate(currentDay).setDate(currentDay.getDate() + 6),
  ).getMonth();

  const month =
    checkNextMonth > currentMonth
      ? `${months[currentMonth]} - ${months[nextMonth]}`
      : `${months[currentMonth]}`;

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
          <span className="button_create-task-text">Create</span>
        </button>
        <div className="navigation">
          <button className="navigation__today-btn button">Today</button>
          <button className="icon-button navigation__nav-icon">
            <i
              className="fas fa-chevron-left"
              onClick={() =>
                func(new Date(getWeekStartDate(currentDay).setDate(currentDay.getDate() - 6)))
              }
            ></i>
          </button>
          <button className="icon-button navigation__nav-icon">
            <i
              className="fas fa-chevron-right"
              onClick={() =>
                func(new Date(getWeekStartDate(currentDay).setDate(currentDay.getDate() + 6)))
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

export default Header;
