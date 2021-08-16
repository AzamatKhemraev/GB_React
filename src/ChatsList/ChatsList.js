import "../App.css";
import React, { useCallback } from "react";
import MessageField from "../MessagesField/MessagesField.js";
import Form from "../Form/Form.js";
import Chats from "../Chats/Chats.js";
import { useDispatch, useSelector } from "react-redux";
import { addMessageWithReply } from "../Store/Chatslist/actions";
import { selectChats } from "../Store/Chatslist/selectors";

export default function ChatsList({ match }) {
  const { chatId } = match.params;

  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(addMessageWithReply(chatId, newMessage));
    },
    [dispatch, chatId]
  );

  return (
    <div className="chats-list">
      {!!chatId && !!chats[chatId] && (
        <>
          <MessageField messages={chats[chatId]} />
          <Form onSendMessage={handleSendMessage} />
        </>
      )}

      <Chats chats={chats} />
    </div>
  );
}
