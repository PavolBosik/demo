import React, { useState } from 'react'
import logo from './logo_takeda.png'
import { Counter } from './features/counter/Counter'
import './App.css'
import { AppContainer, RootContainer } from './styles/MainContainer.styles'
import { useAppSelector } from './app/hooks'
import Navbar from './features/navbar/Navbar'
import Weather from './features/weather/Weather'
import { useTranslation } from 'react-i18next'

function App() {
    const lsi18NSetting = localStorage.getItem('i18nextLng')
    const [language, setLanguage] = useState(
        lsi18NSetting ? lsi18NSetting : 'en'
    )
    const { dark } = useAppSelector((state) => state.theme)
    const { i18n } = useTranslation()
    const handleChangeLanguage = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        i18n.changeLanguage(event.target.value).then()
        setLanguage(event.target.value)
    }
    return (
        <RootContainer dark={dark}>
            <AppContainer className="App">
                <Navbar
                    onChangeLanguage={handleChangeLanguage}
                    language={language}
                />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Counter />
                </header>
                <Weather language={language} />
            </AppContainer>
        </RootContainer>
    )
}

export default App
