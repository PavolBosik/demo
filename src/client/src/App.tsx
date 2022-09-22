import React from 'react'
import logo from './logo_takeda.png'
import { Counter } from './features/counter/Counter'
import './App.css'
import { AppContainer } from './styles/MainContainer.styles'
import { useAppSelector } from './app/hooks'
import Navbar from './features/navbar/Navbar'
import Weather from './features/weather/Weather'

function App() {
    const { dark } = useAppSelector((state) => state.theme)
    return (
        <AppContainer dark={dark} className="App">
            <Navbar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
            </header>
            <Weather />
        </AppContainer>
    )
}

export default App
