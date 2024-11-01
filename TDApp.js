import React, { useState } from 'react';
import './App.css';
import './Td.css'; // Importing the styling file
import TodoList from './TodoList';

function TDApp() {
  const [task, setTask] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const fromDateChangeHandler = (e) => {
    setFromDate(e.target.value);
  };

  const toDateChangeHandler = (e) => {
    setToDate(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      task: task,
      fromDate: fromDate,
      toDate: toDate
    };

    if (isEditing) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentTaskIndex ? newTask : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setTask("");
      setFromDate("");
      setToDate("");
      setCurrentTaskIndex(null);
    } else {
      const newTodos = [...todos, newTask];
      setTodos(newTodos);
      setTask("");
      setFromDate("");
      setToDate("");
    }
  };

  const deleteHandler = (indexValue) => {
    const newTodo = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodo);
  };

  const editHandler = (index) => {
    setIsEditing(true);
    setTask(todos[index].task);
    setFromDate(todos[index].fromDate);
    setToDate(todos[index].toDate);
    setCurrentTaskIndex(index);
  };

  return (
    <div>
      <center>
        
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">ToDo List App</h4>
            <form onSubmit={SubmitHandler}>
              <input
                type="text"
                name="Add Tasks"
                value={task}
                onChange={changeHandler}
                placeholder={isEditing ? "Edit Task" : "Add Task"}
              />{" "}
              <br />
              <label>From Date: </label>
              <input type="datetime-local" value={fromDate} onChange={fromDateChangeHandler} /> <br />
              <label>To Date: </label>
              <input type="datetime-local" value={toDate} onChange={toDateChangeHandler} /> <br />
              <input type="submit" value={isEditing ? "Update" : "Add"} />
            </form>
            <TodoList todos={todos} deleteHandler={deleteHandler} editHandler={editHandler} />
          </div>
        </div>
      </center>
    </div>
  );
}

export default TDApp;
