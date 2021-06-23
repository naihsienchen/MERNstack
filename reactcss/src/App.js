import logo from './logo.svg';
import './App.css';
import Second from './second';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'red', backgroundColor: 'green'}}>This is Inline CSS.</h1>
      <button style={{color: 'green', backgroundColor:'red'}}>Inline CSS button</button>
      <h1 className='fh1'>this is style from stylesheet with class fh1</h1>
      <h1 className='sh1'>this is style from stylesheet with class sh1</h1>
      <Second />
    </div>
  );
}

export default App;
