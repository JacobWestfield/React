import { MESSAGE_ADD } from "./actions"


const initialState = {
    messageList: {}
}

export const messageReducer = (state = initialState, action) => {
    switch (action?.type) {
        case MESSAGE_ADD: {
            const { message, chatId } = action.payload;
            const newMessageList = {
                ...state.messageList
            }
            if (chatId in state.messageList) {
                newMessageList[chatId] = [
                    ...newMessageList[chatId],
                    message
                ]
            } else {
                newMessageList[chatId] = [
                    message
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