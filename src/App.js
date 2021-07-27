import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import MessageField from "./MessagesField/MessagesField.js";
import Form from "./Form/Form.js";

function App() {
  const [messages, setMessages] = useState([
    {
      author: "Azamat Khemraev",
      text: "test text",
      id: Date.now(),
    },
  ]);

  const handleSendMessage = useCallback(
    (newMessage) => {
      setMessages([...messages, newMessage]);
    },
    [messages]
  );

  useEffect(() => {
    if (!messages.length || messages[messages.length - 1].author === "Bot") {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        author: "Bot",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, ipsum?",
        id: Date.now(),
      };
      setMessages([...messages, newMessage]);
    }, 1000);

    return () => clearInterval(timeout);
  }, [messages]);

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
