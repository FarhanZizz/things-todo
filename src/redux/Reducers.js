// reducers.js

import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./Action";

const initialState = {
  todos: [],
};

function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.title,
            status: action.status,
            time: action.time,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, status: action.status, title: action.title }
            : todo
        ),
      };
    default:
      return state;
  }
}

export default todoApp;
