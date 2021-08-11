import { useSelector } from "react-redux";
import { selectTodos } from "./todosSlice";
import { useDispatch } from "react-redux";
import { toggleTodo } from "./todosSlice";

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  console.log(todos);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="todoList">
      <div className="todoList__section">
        <h2 className="todoList__doTitle">Stuffs to do</h2>
        <ul className="todoList__todos">
          {todos &&
            todos.map((todo) => {
              return (
                !todo.completed && (
                  <li
                    className="todoList__todo todoList__todo--new"
                    key={todo.id}
                  >
                    <p>{todo.text}</p>
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
            todos.map((todo) => {
              return (
                todo.completed && (
                  <li
                    className="todoList__todo todoList__todo--done"
                    key={todo.id}
                  >
                    <p>{todo.text}</p>
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
