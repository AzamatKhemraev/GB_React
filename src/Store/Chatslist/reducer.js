import { CHATS_ADD_CHAT, CHATS_ADD_MESSAGE } from "./actions";

const initialChats = {
  Chat123: [
    {
      author: "",
      text: "this is chat#1",
      chatId: "Chat123",
      chatName: "Chat #1",
      messId: Date.now(),
    },
  ],
  Chat657: [
    {
      author: "",
      text: "this is chat#2",
      chatId: "Chat657",
      chatName: "Chat #2",
      messId: Date.now(),
    },
  ],
  Chat345: [
    {
      author: "",
      text: "this is chat#3",
      chatId: "Chat345",
      chatName: "Chat #3",
      messId: Date.now(),
    },
  ],
};

const chatsReducer = (state = initialChats, action) => {
  switch (action.type) {
    case CHATS_ADD_MESSAGE:
      return {
        ...state,
        [action.chatId]: [...state[action.chatId], action.message],
      };
    default:
      return state;
  }
};

export default chatsReducer;
