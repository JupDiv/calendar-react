import React, { useState, useEffect } from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, dataDay }) => {
  const [min, changeMin] = useState(new Date().getMinutes());
  const styleForHr = {
    position: 'relative',
    height: '1px',
    top: min,
    margin: 0,
    backgroundColor: '#ff0000',
    border: 'none',
  };

  const today = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      changeMin(new Date().getMinutes());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {dataDay === today.getDate() && dataHour === today.getHours() && <hr style={styleForHr} />}
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default Hour;
