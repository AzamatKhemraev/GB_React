import './App.css';

function App(props) {
  return (
    <div className = 'App'>
      <header className = 'App-header'>
        My First React App
        <h3>Hello world! My name is {props.name}</h3>
      </header>
    </div>
  )
}

export default App;
