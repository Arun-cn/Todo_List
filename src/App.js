import './styles/App.css';
import EditText from './components/TaskEdit';
import TodoItemCard from './components/TodoItemCard';

function App() {
  return (
    <div className="App">
       <h1>TODO LIST</h1>
       <div className='todoappcontiner'>
        <EditText></EditText>
        <div>
          <TodoItemCard></TodoItemCard>
        </div>

       </div>
    </div>
  );
}

export default App;
