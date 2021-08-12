import { AddTodo } from '../features/todos/AddTodo';
import { TodoList } from '../features/todos/TodoList';
import { Now } from '../features/now/Now';

function App() {
  return (
    <div className="App">
        <Now/>
        <div className='flex flex--al-center flex--ju-center flex--col'>
          <AddTodo/>
          <TodoList/>
        </div>
    </div>
  );
}

export default App;
