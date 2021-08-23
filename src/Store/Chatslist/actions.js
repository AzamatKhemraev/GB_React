export const CHATS_ADD_CHAT = "CHATS::ADD_CHAT";
export const CHATS_ADD_MESSAGE = "CHATS::ADD_MESSAGE";
export const CHATS_REMOVE_CHAT = "CHATS::REMOVE_CHAT";

export default function addMessage(chatId, message) {
  return {
    type: CHATS_ADD_MESSAGE,
    chatId,
    message,
  };
}

let timeout;
export const addMessageWithReply = (chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));

  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    dispatch(
      addMessage(chatId, {
        author: "Bot",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, ipsum?",
        chatId: chatId,
        chatName: "Chat #3",
        messId: Date.now(),
      })
    );
  }, 1000);
};

export function addChat(payload) {
  return {
    type: CHATS_ADD_CHAT,
    payload,
  };
}

export function removeChat(payload) {
  return {
    type: CHATS_REMOVE_CHAT,
    payload,
  };
}
