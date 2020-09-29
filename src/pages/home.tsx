import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layouts'
import ClientSide from '../components/ClientSide'
import AnotherClient from '../components/AnotherClient'

const Home = () => {
    return (
        <Layout>
            <Router basepath="/home">
                <ClientSide path="/page" />
                <AnotherClient path="/another" />
            </Router>
        </Layout>
    )
}

export default Home