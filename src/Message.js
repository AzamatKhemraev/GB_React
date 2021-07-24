import './App.css';

function Message(props) {
  return (
    <div className = 'Message'>
      <div className = 'Message-box send'>
        <h3 className = 'Message-text'>{props.msg}</h3>
      </div>
      <div className = 'Message-sender'>
          <h2>{props.sender}</h2>
      </div>
    </div>
  )
}

export default Message;
