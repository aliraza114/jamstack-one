import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layouts'
import Container from '../components/Container'
import { Button } from '@material-ui/core'

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
        <br/>
        <Link to="/home/page">Client Side Page</Link>
        <br/>
        <Link to="/home/another">Another Client Page</Link>
        </Layout>
        <Button variant="contained" color="secondary">Material UI Button</Button>
    </div>
}