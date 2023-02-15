import { useEffect, useReducer } from "react";
import {
  Task,
  initialState,
  todoReducer,
} from "../08-useReducer/intro-reducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")!);
  };

export const useTodo = () => {
 
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const total = todos.length;
  const pending = todos.filter((task) => !task.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  const addTask = (task: Task) => {
    if (!task.todo) return;
    dispatch({ type: "ADD TODO", payload: task });
  };

  const deleteTask = (currentTaskId: number) => {
    dispatch({ type: "DELETE TODO", payload: currentTaskId });
  };

  const handleTodo = (id: number) => {
    dispatch({ type: "TOGGLE TODO", payload: id });
  };

  return {
    todos,
    total,
    pending,
    addTask,
    deleteTask,
    handleTodo,
  };
};
