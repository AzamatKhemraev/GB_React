import {
  CHATS_ADD_CHAT,
  CHATS_ADD_MESSAGE,
  CHATS_REMOVE_CHAT,
} from "./actions";

const initialChats = {
  Chat0: [
    {
      author: "",
      text: "this is chat#1",
      chatId: "Chat0",
      chatName: "Work",
      messId: Date.now(),
    },
  ],
};

function createChat(state, action) {
  return {
    author: "",
    text: `this is "${action.payload}" chat`,
    chatId: `Chat${Object.keys(state).length}`,
    chatName: action.payload,
    messId: Date.now(),
  };
}

function removeChat(state, chatId) {
  delete state[chatId];
  return state;
}

const chatsReducer = (state = initialChats, action) => {
  switch (action.type) {
    case CHATS_ADD_MESSAGE:
      return {
        ...state,
        [action.chatId]: [...state[action.chatId], action.message],
      };
    case CHATS_ADD_CHAT:
      return {
        ...state,
        [`Chat${Object.keys(state).length}`]: [createChat(state, action)],
      };
    case CHATS_REMOVE_CHAT:
      return removeChat(state, action.payload);

    default:
      return state;
  }
};
export default chatsReducer;
