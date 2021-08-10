import "../App.css";
import React, { useCallback, useEffect } from "react";
import MessageField from "../MessagesField/MessagesField.js";
import Form from "../Form/Form.js";
import Chats from "../Chats/Chats.js";
import { useDispatch, useSelector } from "react-redux";
import addMessage from "../Store/Chatslist/actions";

export default function ChatsList({ match }) {
  const { chatId } = match.params;

  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(addMessage(chatId, newMessage));
    },
    [dispatch, chatId]
  );

  useEffect(() => {
    if (
      !chats[chatId] ||
      !chats[chatId].length ||
      chats[chatId][chats[chatId].length - 1].author === "Bot"
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        author: "Bot",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, ipsum?",
        chatId: "Chat345",
        chatName: "Chat #3",
        messId: Date.now(),
      };
      dispatch(addMessage(chatId, newMessage));
    }, 1000);

    return () => clearInterval(timeout);
  }, [dispatch, chats, chatId]);

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
