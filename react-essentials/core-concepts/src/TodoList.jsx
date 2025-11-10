import { useState } from "react";
import "./TodoList.css";

const Todo = ({ index, id, createdAt }) => {
  return (
    <div className="todo-item">
      <div className="todo-cell">{index}</div>
      <div className="todo-cell">{id}</div>
      <div className="todo-cell">
        <input className="todo-input" placeholder="Enter item..." />
      </div>
      <div className="todo-cell">{createdAt.toLocaleTimeString()}</div>
    </div>
  );
};

export const TodoList = () => {
  const date = new Date();
  const [todoCounter, setTodoCounter] = useState(1);
  const [list, setList] = useState([
    {
      id: 1,
      createdAt: date,
    },
  ]);

  const sortByEarliest = () => {
    const sortedList = [...list].sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    setList(sortedList);
  };

  const sortByLatest = () => {
    const sortedList = [...list].sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    setList(sortedList);
  };

  const addToEnd = () => {
    const date = new Date();
    const nextId = todoCounter + 1;
    const newList = [...list, { id: nextId, createdAt: date }];
    setList(newList);
    setTodoCounter(nextId);
  };

  const addToStart = () => {
    const date = new Date();
    const nextId = todoCounter + 1;
    const newList = [{ id: nextId, createdAt: date }, ...list];
    setList(newList);
    setTodoCounter(nextId);
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <div className="todo-buttons">
          <button onClick={addToStart} className="todo-btn">
            Add New to Start
          </button>
          <button onClick={addToEnd} className="todo-btn">
            Add New to End
          </button>
          <button onClick={sortByEarliest} className="todo-btn">
            Sort by Earliest
          </button>
          <button onClick={sortByLatest} className="todo-btn">
            Sort by Latest
          </button>
        </div>
      </div>
      <div className="todo-list">
        <div className="todo-header-row">
          <div className="todo-cell">Index</div>
          <div className="todo-cell">ID</div>
          <div className="todo-cell">Item</div>
          <div className="todo-cell">Created at</div>
        </div>
        {list.map((todo, index) => (
          <Todo key={index} index={index} {...todo} />
        ))}
      </div>
    </div>
  );
};
