import React from 'react'
import { Layout } from './components/Layout'

import GlobalStyles from './styles/GlobalStyles'

export const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Layout />
        </>
    )
}