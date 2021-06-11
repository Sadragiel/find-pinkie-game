import { storeName } from './types';

const getStore = (state) => state[storeName];

export const selectors = {
    getCardList: (state) => getStore(state).cardList,
    getNumberOfAttempts: (state) => getStore(state).numberOfAttempts,
    getPinkieFindingState: (state) => getStore(state).wasPinkieFound,
    getIsGameover: (state) => getStore(state).wasPinkieFound || getStore(state).numberOfAttempts === 0,
};
