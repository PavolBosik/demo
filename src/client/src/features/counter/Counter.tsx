import React, { useState } from 'react'
import '../../i18n'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from './counterSlice'
import {
    CounterButton,
    CounterContainer,
    CounterInputTextBox,
    CounterText,
} from './Counter.styles'
import { useTranslation } from 'react-i18next'

export function Counter() {
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')
    const incrementValue = Number(incrementAmount) || 0
    const { dark } = useAppSelector((state) => state.theme)
    const { t } = useTranslation()
    return (
        <div>
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
