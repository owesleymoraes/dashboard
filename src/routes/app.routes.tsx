import React from 'react'
import { List } from '../pages/List'
import { Layout } from '../components/Layout'
import { Dashboard } from '../pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export const AppRoutes: React.FC = () => {

    return (
        <Layout>
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/list/:type' element={<List />} />
                </Routes>

            </Router>
        </Layout>

    )

}