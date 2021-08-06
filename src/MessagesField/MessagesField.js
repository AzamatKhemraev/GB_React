import React, { useCallback } from "react";
import Message from "../Message/Message.js";

export default function MessagesField(props) {
  const messages = props.messages;

  const renderMessage = useCallback((mess, i) => {
    return <Message text={mess.text} author={mess.author} key={mess.messId} />;
  }, []);

  return <div className="messages-field">{messages.map(renderMessage)}</div>;
}
