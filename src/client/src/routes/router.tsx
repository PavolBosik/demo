import React, { ReactElement } from 'react'
import Routes from './routes'
import Navbar from '../features/navbar/Navbar'
import { HashRouter } from 'react-router-dom'

const Router: React.FC = (): ReactElement => {
    return (
        <HashRouter>
            <Navbar />
            <Routes />
        </HashRouter>
    )
}

export default Router
