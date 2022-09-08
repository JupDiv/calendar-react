const baseUrl = 'https://62da6554e56f6d82a760650f.mockapi.io/api/todolist/v1/Google-calendar/';

export const fetchTasksList = () => {
  return fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(alert("Internal Server Error. Can't display events"));
    }
  });
};

export const handlerAddTask = newTask => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newTask),
  }).then(resp => {
    if (!resp.ok) {
      throw new Error(alert('Failed to add task'));
    }
  });
};

export const handlerDeleteTask = taskId => {
  return fetch(`${baseUrl}${taskId}`, {
    method: 'DELETE',
  }).then(resp => {
    if (!resp.ok) {
      throw new Error(alert('Failed to remove task'));
    }
  });
};

/*
********TEST DATA******

// const events = [
//   {
//     id: 1,
//     title: 'Go to the gym',
//     description: 'some text here',
//     dateFrom: new Date(2022, 8, 1, 10, 15),
//     dateTo: new Date(2022, 8, 1, 15, 0),
//   },
//   {
//     id: 2,
//     title: 'Go to the school',
//     description: 'hello, 2 am',
//     dateFrom: new Date(2022, 8, 2, 10, 15),
//     dateTo: new Date(2022, 8, 2, 11, 0),
//   },
//   {
//     id: 3,
//     title: 'Lunch',
//     description: '',
//     dateFrom: new Date(2022, 8, 3, 10, 15),
//     dateTo: new Date(2022, 8, 3, 10, 15),
//   },
//   {
//     id: 4,
//     title: 'Meet friend',
//     description: 'at the cafe',
//     dateFrom: new Date(2022, 8, 4, 10, 15),
//     dateTo: new Date(2022, 8, 4, 10, 15),
//   },
// ];
// export default events;
*/
