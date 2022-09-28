import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Navbar from '../features/navbar/Navbar'

const Router: React.FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes />
        </BrowserRouter>
    )
}

export default Router
