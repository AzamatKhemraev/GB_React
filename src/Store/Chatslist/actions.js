export const CHATS_ADD_CHAT = "CHATS::ADD_CHAT";
export const CHATS_ADD_MESSAGE = "CHATS::ADD_MESSAGE";

export default function addMessage(chatId, message) {
  return {
    type: CHATS_ADD_MESSAGE,
    chatId,
    message,
  };
}
