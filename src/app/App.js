import { AddTodo } from '../features/todos/AddTodo';
import { TodoList } from '../features/todos/TodoList';
import { Now } from '../features/now/Now';

function App() {
  return (
    <div className="App">
        <Now/>
        <AddTodo/>
        <TodoList/>
    </div>
  );
}

export default App;
