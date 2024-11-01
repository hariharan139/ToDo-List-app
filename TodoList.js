import React from 'react';

const TodoList = ({ todos, deleteHandler, editHandler }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <h5>
            <strong>Task:</strong> {todo.task} <br />
            <strong>From:</strong> {new Date(todo.fromDate).toLocaleString()} <br />
            <strong>To:</strong> {new Date(todo.toDate).toLocaleString()} <br />
            <button className="edit-btn" onClick={() => editHandler(index)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteHandler(index)}>Delete</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
