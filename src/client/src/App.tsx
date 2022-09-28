import React from 'react'
import './App.css'
import { AppContainer, RootContainer } from './styles/MainContainer.styles'
import { useAppSelector } from './app/hooks'
import Router from './routes/router'

function App() {
    const { dark } = useAppSelector((state) => state.theme)
    return (
        <RootContainer dark={dark} style={{ height: '100%' }}>
            <AppContainer className="App">
                <Router />
            </AppContainer>
        </RootContainer>
    )
}

export default App
