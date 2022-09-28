import React from 'react'
import './App.css'
import { AppContainer, RootContainer } from './styles/MainContainer.styles'
import { useTypedSelector } from './hooks/useTypedReduxHooks'
import Router from './routes/Router'

function App() {
    const { dark } = useTypedSelector((state) => state.theme)
    return (
        <RootContainer dark={dark} style={{ height: '100%' }}>
            <AppContainer className="App">
                <Router />
            </AppContainer>
        </RootContainer>
    )
}

export default App
