import React from 'react'
import { Routes } from './routes'
import {useTheme} from './hooks/theme'
import dark from './styles/themes/dark'
import { Layout } from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

export const App: React.FC = () => {
    const {theme} = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    )
}