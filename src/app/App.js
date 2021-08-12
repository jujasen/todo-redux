import { AddTodo } from "../features/todos/AddTodo";
import { TodoList } from "../features/todos/TodoList";
import { Now } from "../features/now/Now";
import { Weather } from "../features/weather/Weather";

function App() {
  return (
    <div className="App flex flex--col flex--al-center">
      <div className="flex flex--al-center flex--ju-space width">
        <Now />
        <Weather />
      </div>
      <div className="flex flex--al-center flex--ju-center flex--col">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
