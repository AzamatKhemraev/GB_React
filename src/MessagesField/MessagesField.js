import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import Message from "../Message/Message.js";
import { selectProfileName } from "../Store/Profile/selectors.js";

export default function MessagesField(props) {
  const messages = props.messages;
  const profileName = useSelector(selectProfileName);

  const renderMessage = useCallback(
    (mess, i) => {
      return (
        <Message
          text={mess.text}
          author={mess.author === "Azamat Khemraev" ? profileName : mess.author}
          key={mess.messId}
        />
      );
    },
    [profileName]
  );

  return <div className="messages-field">{messages.map(renderMessage)}</div>;
}
