import React, { ReactNode } from 'react'
import { Link } from 'gatsby'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return <div>
        <h1>Layout File</h1>
        <Link to="/about">About</Link>
        {children}
    </div>
}