import './App.css';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import CommentsList from './components/CommentsList';


function App() {
  return (
    <div className="App">
      <Counter />
      <TextInput />
      <TodoList />
      <Timer />
      <CommentsList/>
    </div>
  );
}

export default App;
