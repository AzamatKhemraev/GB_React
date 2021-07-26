import './App.css';
import Message from './Message.js';

const msgProps = {
  sender: 'Azamat Khemraev',
  msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, explicabo.',
}


function App(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <Message msg={msgProps.msg} sender={msgProps.sender}/>
      </header>
    </div>
  )
}

export default App;
