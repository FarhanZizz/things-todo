// actions.js

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

let nextTodoId = 0;

export function addTodo(title, status) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    title,
    status,
    time: new Date().toLocaleString(),
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function updateTodo(id, title, status) {
  return {
    type: UPDATE_TODO,
    id,
    title,
    status,
  };
}
