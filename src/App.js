import './styles/App.css';
import EditText from './components/TaskEdit';

function App() {
  return (
    <div className="App">
       <h1>TODO LIST</h1>
       <div className='todoappcontiner'>
        <EditText></EditText>

       </div>
    </div>
  );
}

export default App;
