import { useSelector } from 'react-redux'
import { Card } from '../Card'

import { selectors } from '../../store/game'

export function Grid() {
    const list = useSelector(selectors.getCardList);

    return <div className="grid">
        {
            list.map((el, i) => <Card state={el} index={i} />)
        }
    </div>
}