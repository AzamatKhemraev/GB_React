import React, { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="messages-field">
      <form>
        <input className="message-input" value={message} />
      </form>
    </div>
  );
};

export default Form;
