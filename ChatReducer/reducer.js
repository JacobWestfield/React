import { CHAT_ADD, CHAT_DELETE } from "./actions"


const initialState = {
    chatList: [],
}

export const chatReducer = (state = initialState, action) => {
    switch (action?.type) {
        case CHAT_ADD: {
            return {

                chatList: [
                    ...state.chatList,
                    action.payload
                ]
            }
        }
        case CHAT_DELETE: {
            return {
                chatList: state.chatList.filter(({ id }) => id !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}