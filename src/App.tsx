import React from 'react'
import { Dashboard } from './pages/Dashboard'
import GlobalStyles from './styles/GlobalStyles'

export const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Dashboard />
        </>
    )
}