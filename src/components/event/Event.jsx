import React from 'react';
import events from '../../gateway/events';

import './event.scss';

const Event = ({ id, height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const onDeleteEvent = () => {
    events.map(event => event.id === id);
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

export default Event;
