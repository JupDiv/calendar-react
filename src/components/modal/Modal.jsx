import React, { useState, useEffect } from 'react';
import events from '../../gateway/events';
import moment from 'moment';

import './modal.scss';

const Modal = ({ isClose }) => {
  const [task, onCreateTask] = useState({
    title: '',
    description: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    startTime: moment().format('HH:mm'),
    endTime: moment().format('HH:mm'),
  });

  const { title, description, date, startTime, endTime } = task;

  const onHabdlerTask = e => {
    e.preventDefault();
    const { name, value } = e.target;
    onCreateTask({
      ...task,
      [name]: value,
    });
  };

  const addHandlerTask = () => {
    const createTask = {
      id: events.length + 1,
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };

    events.push(createTask);
    isClose(false);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button onClick={() => isClose(false)} className="create-event__close-btn">
            +
          </button>
          <form className="event-form">
            <input
              onChange={onHabdlerTask}
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              className="event-form__field"
            />
            <div className="event-form__time">
              <input
                onChange={onHabdlerTask}
                defaultValue={date}
                type="date"
                name="date"
                className="event-form__field"
              />
              <input
                onChange={onHabdlerTask}
                type="time"
                name="startTime"
                className="event-form__field"
                defaultValue={startTime}
              />
              <span>-</span>
              <input
                onChange={onHabdlerTask}
                defaultValue={endTime}
                type="time"
                name="endTime"
                className="event-form__field"
              />
            </div>
            <textarea
              onChange={onHabdlerTask}
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
            ></textarea>
            <button onClick={addHandlerTask} type="button" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// class Modal extends Component {
//   render() {
//     return (
//       <div className="modal overlay">
//         <div className="modal__content">
//           <div className="create-event">
//             <button className="create-event__close-btn">+</button>
//             <form className="event-form">
//               <input type="text" name="title" placeholder="Title" className="event-form__field" />
//               <div className="event-form__time">
//                 <input type="date" name="date" className="event-form__field" />
//                 <input
//                   type="time"
//                   name="startTime"
//                   className="event-form__field"
//                   onChange={this.handleChange}
//                 />
//                 <span>-</span>
//                 <input type="time" name="endTime" className="event-form__field" />
//               </div>
//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 className="event-form__field"
//               ></textarea>
//               <button type="submit" className="event-form__submit-btn">
//                 Create
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Modal;
