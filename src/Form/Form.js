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
          type="text"
        />
        <button className="message-send">
          <i className="far fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
