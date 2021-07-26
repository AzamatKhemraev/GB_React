import React, { useState } from "react";

const Form = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      author: "Azamat Khemraev",
      text: message,
      id: Date.now(),
    });
    setMessage("");
  };

  return (
    <div className="messages-send-form">
      <form onSubmit={handleSubmit}>
        <input
          className="message-input"
          value={message}
          onChange={handleChange}
        />
        <button className="message-send">Send</button>
      </form>
    </div>
  );
};

export default Form;
