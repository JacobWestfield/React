import { messageAdd, MESSAGE_ADD } from "./actions"


const initialState = {
    messageList: {}
}


export const addMessageMiddleware = (message, chatId, author) => (dispatch) => {
    dispatch(messageAdd(message, chatId, author));

    const botMessage = {
        message: 'Message from Bot',
        chatId: chatId,
        author: 'Bot'
    }

    if (message[2] !== 'Bot') {
        setTimeout(() => {
            dispatch(messageAdd(botMessage.message, botMessage.chatId, botMessage.author))
        }, 2000)
    }

    return
}

export const messageReducer = (state = initialState, action) => {
    switch (action?.type) {
        case MESSAGE_ADD: {
            const { message, chatId, author = 'user' } = action.payload;
            const newMessageList = {
                ...state.messageList
            }
            if (chatId in state.messageList) {
                newMessageList[chatId] = [
                    ...newMessageList[chatId],
                    { message: message, author: author }
                ]
            } else {
                newMessageList[chatId] = [
                    { message: message, author: author }
                ]
            }
            return {
                messageList: newMessageList,
            }
        }

        default: {
            return state
        }
    }
}