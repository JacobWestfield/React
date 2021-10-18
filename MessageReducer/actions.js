export const MESSAGE_ADD = 'MESSAGE_ADD';

export const MESSAGE_DELETE = 'MESSAGE_DELETE';



export const messageAdd = (message, chatId) => ({
    type: MESSAGE_ADD,
    payload: {
        message,
        chatId
    },
})

export const messageDelete = (message, chatId) => ({
    type: MESSAGE_DELETE,
    payload: {
        message,
        chatId
    },
})
