export const getChat = (store) => store.chats;

export const getChatList = (store) => getChatList(store)?.chatList || [];

export const getChatById = (store)=>(chatId) => getChatList(store).find(({id}) => id = chatId);
