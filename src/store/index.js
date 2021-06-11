import { createStore, combineReducers } from 'redux';
import { reducer as gameReducer, storeName as gameStoreName } from './game';

const reducer = combineReducers({
    [gameStoreName]: gameReducer,
});

export const store = createStore(reducer);
