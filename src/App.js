import "./App.css";
import React, { useCallback, useState } from "react";
import MessageField from "./MessagesField/MessagesField.js";
import Form from "./Form/Form.js";

function App() {
  const [messages, setMessages] = useState([
    { text: "test text", author: "Azamat Khemraev", id: Date.now() },
  ]);

  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages([...messages, newMessage]);
    },
    [messages]
  );

  return (
    <div className="App">
      <header className="App-header">
        <MessageField messages={messages} />
        <Form onSendMessage={handleSendMessage} />
      </header>
    </div>
  );
}

export default App;
