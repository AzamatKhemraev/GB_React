import "../App.css";
import React, { useCallback, useEffect, useState } from "react";
import MessageField from "../MessagesField/MessagesField.js";
import Form from "../Form/Form.js";
import Chats from "../Chats/Chats.js";

const initialChats = {
  Chat123: [
    {
      author: "Azamat Khemraev",
      text: "this is chat#1",
      chatId: "Chat123",
      chatName: "Chat #1",
      messId: Date.now(),
    },
  ],
  Chat657: [
    {
      author: "Azamat Khemraev",
      text: "this is chat#2",
      chatId: "Chat657",
      chatName: "Chat #2",
      messId: Date.now(),
    },
  ],
  Chat345: [
    {
      author: "Azamat Khemraev",
      text: "this is chat#3",
      chatId: "Chat345",
      chatName: "Chat #3",
      messId: Date.now(),
    },
  ],
};

export default function ChatsList({ match }) {
  const { chatId } = match.params;

  const [chats, setChats] = useState(initialChats);

  const handleSendMessage = useCallback(
    (newMessage) => {
      setChats({
        ...chats,
        [chatId]: [...chats[chatId], newMessage],
      });
    },
    [chats, chatId]
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
      setChats({
        ...chats,
        [chatId]: [...chats[chatId], newMessage],
      });
    }, 1000);

    return () => clearInterval(timeout);
  }, [chats[chatId]]);

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
