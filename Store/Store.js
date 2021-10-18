import { combineReducers, createStore } from 'redux';
import { chatReducer } from '../ChatReducer/reducer';
import { messageReducer } from '../MessageReducer/reducer';

export const store = createStore(
    combineReducers({
        chats: chatReducer,
        messages: messageReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

