import React from 'react';
import { handlerDeleteTask } from '../../gateway/events';
import propTypes from 'prop-types';

import './event.scss';

const Event = ({ id, height, marginTop, title, time, onUpdateListTasks }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const onDeleteEvent = () => {
    handlerDeleteTask(id).then(() => onUpdateListTasks());
  };

  return (
    <div style={eventStyle} className="event">
      <span onClick={onDeleteEvent} className="delete-event-btn">
        +
      </span>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

Event.propTypes = {
  id: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  marginTop: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  onUpdateListTasks: propTypes.func.isRequired,
};

export default Event;
