import { useSelector } from "react-redux"
import { selectors } from '../../store/game'

const getInProggressMessage = n => `Find me to start a PARTY! You have ${n} attempt${n > 1 ? 's' : ''} left!`;
const getFailureMessage = () => `You didn't find me... Hey, you know what this calls for? A party! Or restart at least!`;
const getSuccessMessage = () => `You have found me! Isn't this exciting? Are you excited because I'm excited I've never been so excited`;

export function Message() {
    const wasPinkieFound = useSelector(selectors.getPinkieFindingState);
    const numberOfAttempts = useSelector(selectors.getNumberOfAttempts);

    const message = wasPinkieFound 
        ? getSuccessMessage()
        : numberOfAttempts === 0
            ? getFailureMessage()
            : getInProggressMessage(numberOfAttempts);

    return <div className="message">
        <span className="message__text">
            {message}
        </span>
    </div>
}