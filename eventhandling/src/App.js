import logo from './logo.svg';
import './App.css';
import CC from './CC'
function App() {
  function onClickEvent(){
    alert('you clicked me from App.js!')
  }    
  function onChangeEvent(){
    alert('you changed me from App.js!')
  }    
  function onHoverEvent(){
    alert('you hovered me from App.js!')
  }    
  return (
    <div className="App">
      <h1>Event handling</h1>
        <button onClick={onClickEvent}>This is on click event</button>
        <input type='text' onChange={onChangeEvent} />
        <h2 onMouseOver={onHoverEvent}>This is on mouse hover event</h2>
        <CC/>
    </div>
  );
}

export default App;
