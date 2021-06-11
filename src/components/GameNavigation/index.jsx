import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectors, actions } from '../../store/game'

export function GameNavigation() {
    const isGameOver = useSelector(selectors.getIsGameover);
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        dispatch(actions.start())
    }, [dispatch])

    return <div className="game-navigation">
        {
            isGameOver
            ? <button className="game-navigation__button"
                onClick={ onClick }>
                    Restart? Okie-dokie-lokie!
            </button>
            : null
        }
    </div>
}