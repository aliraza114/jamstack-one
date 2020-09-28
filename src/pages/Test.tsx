import React from 'react'
import Layout from '../components/Layouts'
import { Link } from 'gatsby'

export default () => {
    return <div>
        <Link to="/">Home</Link>
        <Layout>
            <p>Test Here</p>
        </Layout>

    </div>
}