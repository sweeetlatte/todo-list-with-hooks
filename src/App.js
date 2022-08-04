import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import TodoApp from './components/TodoApp';

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="App">
      {!token && <Login />}
      {token && <TodoApp />}
    </div>
  );
}

export default App;
