import { createStore } from 'redux';
import { ProfileReducer } from './ProfileReducer';


export const store = createStore(ProfileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

