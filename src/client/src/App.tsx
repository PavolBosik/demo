import React from 'react'
import { AppContainer, RootContainer } from './App.styles'
import { useTypedSelector } from './hooks/useTypedReduxHooks'
import Router from './routes/Router'

function App() {
    const { dark } = useTypedSelector((state) => state.theme)
    return (
        <RootContainer dark={dark} style={{ height: '100%' }}>
            <AppContainer>
                <Router />
            </AppContainer>
        </RootContainer>
    )
}

export default App
