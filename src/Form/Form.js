import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

const Form = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const name = useSelector((sate) => sate.profile.name);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      author: name,
      text: message,
      messId: Date.now(),
    });
    setMessage("");
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [message, onSendMessage]);

  return (
    <div className="messages-send-form">
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          value={message}
          onChange={handleChange}
          type="text"
          inputRef={inputRef}
        />
        <button className="message-send">
          <i className="far fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
