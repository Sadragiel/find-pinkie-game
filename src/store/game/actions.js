import { types } from './types';
import { createAction } from '@reduxjs/toolkit'

const flipCard = createAction(types.FLIP_CARD);
const start = createAction(types.START);

export const actions = {
    flipCard,
    start,
};
