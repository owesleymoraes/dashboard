import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Dashboard } from '../pages/Dashboard'
import { List } from '../pages/List'


export const AppRoutes: React.FC = () => {

    return (
        <Layout>
            <Router>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/list/:type' element={<List />} />
                </Routes>

            </Router>
        </Layout>

    )

}