import { useSelector } from "react-redux";
import { selectTodos } from "./todosSlice";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "./todosSlice";
import moment from "moment";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();


  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todoList">
      <div className="todoList__section">
        <h2 className="todoList__doTitle">Stuffs to do</h2>
        <ul className="todoList__todos">
          {todos &&
            todos.map((todo, i) => {
              return (
                !todo.completed && (
                  <li
                    className="todoList__todo todoList__todo--new"
                    key={todo.id}
                  >
                    <div className='todoList__flex'>
                      <button
                        onClick={() => handleRemove(i)}
                        className="todoList__btn todoList__btn--delete"
                      ></button>
                      <p>{todo.text}&nbsp;&nbsp;&nbsp; <span>by {moment(todo.doBy).format('MM/DD/YY')} at {moment(todo.doBy).format('h:mm')}</span></p>
                    </div>
                    <button
                      onClick={() => handleToggle(todo.id)}
                      className="todoList__btn todoList__btn--new"
                    ></button>
                  </li>
                )
              );
            })}
        </ul>
      </div>
      <div className="todoList__section">
        <h2 className="todoList__doneTitle">Done stuffs</h2>
        <ul className="todoList__todos">
          {todos &&
            todos.map((todo, i) => {
              return (
                todo.completed && (
                  <li
                    className="todoList__todo todoList__todo--done"
                    key={todo.id}
                  >
                    <div className='todoList__flex'>
                      <button
                        onClick={() => handleRemove(i)}
                        className="todoList__btn todoList__btn--delete"
                      ></button>
                      <p>{todo.text}&nbsp;&nbsp;&nbsp; <span>by {moment(todo.doBy).format('MM/DD/YY')} at {moment(todo.doBy).format('h:mm')}</span></p>
                    </div>
                    <button
                      onClick={() => handleToggle(todo.id)}
                      className="todoList__btn todoList__btn--done"
                    ></button>
                  </li>
                )
              );
            })}
        </ul>{" "}
      </div>
    </div>
  );
};
