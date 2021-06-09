import logo from './logo.svg';
import './App.css';
import CC from './CC'
import Parent from './Parent'
import Parent_functional from './Parent_functional'

function App() {
  
  return (
    <div className="App">
      <h1>This is Props Lecture</h1>
      <CC/>
      <Parent movie='Avengers'/>//this is going to be passed down to Parent.js
      <Parent_functional/>
    </div>
  );
}

export default App;
