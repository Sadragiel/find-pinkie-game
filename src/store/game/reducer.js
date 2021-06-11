import { types } from './types';
import { constants } from '../../utils/constants';
import { cardStates, defaultState } from '../../utils/cardStates';
import { getPinkiePosition } from '../../utils/getPinkieIndex';

const initialState = {
    cardList: Array(constants.NUMBER_OF_CARDS)
        .fill(defaultState),
    numberOfAttempts: constants.NUMBER_OF_ATTEMPTS,
    pinkiePosition: getPinkiePosition(),
    wasPinkieFound: false,
};

export const reducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.START:
            return {
                ...initialState,
                pinkiePosition: getPinkiePosition(),
            };
        case types.FLIP_CARD:
            if (state.wasPinkieFound || state.numberOfAttempts === 0) {
                return state;
            }
            return {
                ...state,
                numberOfAttempts: state.numberOfAttempts - 1,
                cardList: state.cardList.map((card, index) => {
                    if(index !== payload)
                        return card;
                    if(state.pinkiePosition === payload)
                        return cardStates.PINKIE;
                    return cardStates.CANNON;
                }),
                wasPinkieFound: state.pinkiePosition === payload,
            };
        default:
            return state;
    }
};
