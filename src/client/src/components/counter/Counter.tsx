import React, { useState } from 'react'
import '../../i18n'
import logo from '../../logo_takeda.png'

import {
    useTypedSelector,
    useTypedDispatch,
} from '../../hooks/useTypedReduxHooks'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from '../../store/counterSlice'
import {
    CounterButton,
    CounterContainer,
    CounterInputTextBox,
    CounterText,
} from './Counter.styles'
import { useTranslation } from 'react-i18next'

const Counter = () => {
    const count = useTypedSelector(selectCount)
    const dispatch = useTypedDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')
    const incrementValue = Number(incrementAmount) || 0
    const { dark } = useTypedSelector((state) => state.theme)
    const { t } = useTranslation()
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />

            <CounterContainer>
                <CounterButton
                    aria-label="Decrement value"
                    dark={dark}
                    onClick={() => dispatch(decrement())}
                >
                    -
                </CounterButton>
                <CounterText dark={dark}>{count}</CounterText>
                <CounterButton
                    dark={dark}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </CounterButton>
            </CounterContainer>
            <CounterContainer>
                <CounterInputTextBox
                    dark={dark}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <CounterButton
                    dark={dark}
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    {t('addAmount')}
                </CounterButton>
                <CounterButton
                    dark={dark}
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    {t('addAsync')}
                </CounterButton>
                <CounterButton
                    dark={dark}
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    {t('addIfOdd')}
                </CounterButton>
                <div style={{ display: 'none' }}>Test</div>
            </CounterContainer>
        </div>
    )
}

export default Counter
