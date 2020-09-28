import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layouts'
import Container from '../components/Container'
import {Link} from 'gatsby'
import '../style/style.css'


export default () => {
    return <div>
        <Layout>
            <Header text="Ali Raza" subtext="Janigaga"></Header>
        Hello World From Jani Gaga
        <Container>
            <h1>About Containers</h1>
            <p>From the container CSS Module</p>
        </Container>
        <Link to="/dynamic-page">Dynamically Created Page At Build Time</Link>
        </Layout>
    </div>
}