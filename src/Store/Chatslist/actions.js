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
