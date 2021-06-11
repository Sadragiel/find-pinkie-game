import { constants } from "./constants";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const getPinkiePosition = () => getRandomInt(constants.NUMBER_OF_CARDS);