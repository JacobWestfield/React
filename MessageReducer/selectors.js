export const getMessage = (store) => store.messages;

export const getMessageList = (store) => getMessage(store)?.messageList || [];

export const getChatMessage = (chatId) => (store) => getMessageList(store)[chatId];
