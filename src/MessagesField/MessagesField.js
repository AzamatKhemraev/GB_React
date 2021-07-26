import React, { useCallback } from "react";
import Message from "../Message/Message.js";
// import Message from "../Message/Message.js";

const MessagesField = ({ messages }) => {
  const renderMessage = useCallback(
    (mess) => <Message text={mess.text} author={mess.author} key={mess.id} />,
    []
  );

  return <div className="messages-field">{messages.map(renderMessage)}</div>;
};

export default MessagesField;
