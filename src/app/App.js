import { AddTodo } from '../features/todos/AddTodo';
import { TodoList } from '../features/todos/TodoList';

function App() {
  return (
    <div className="App">
        <AddTodo/>
        <TodoList/>
    </div>
  );
}

export default App;
