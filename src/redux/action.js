import { nanoid } from "nanoid";
export const addTask = (text) => {
  return {
    type: "tasks/addTask",
    playload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "tasks/deleteTask",
    playload: taskId,
  };
};

export const toggleCompleted = (taskId) => {
  return {
    type: "tasks/toggleTask",
    playload: taskId,
  };
};
export const setStatusFilter = (value) => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};

// export const addAllreadyTask = (text) => {
//   return {
//     type: "tasks/addTask",
//     payload: {
//       id: nanoid(),
//       text,
//       completed: false,
//     },
//   };
// };
