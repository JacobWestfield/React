export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_DELETE = 'CHAT_DELETE';


export const chatAdd = (chat) => ({
    type: CHAT_ADD,
    payload: chat,
})

export const chatDelete = (chatId) => ({
    type: CHAT_DELETE,
    payload: chatId,
})