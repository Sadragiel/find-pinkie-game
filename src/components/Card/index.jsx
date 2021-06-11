import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getImageSrc, defaultState }  from '../../utils/cardStates';

import { actions } from '../../store/game'

export function Card({ index, state }) {
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        if(state === defaultState)
            dispatch(actions.flipCard(index))
    }, [dispatch, index, state])

    const imageSrc = getImageSrc(state);

    return <div 
        className={`card ${state !== defaultState ? 'card--opened' : ''}`}
        onClick={ onClick }
    >
        <img className="card__preview" alt="Derp" src={ imageSrc } />
    </div>
}