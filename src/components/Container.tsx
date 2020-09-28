import React, { ReactNode } from 'react'

import containerStyle from './container.module.css'

type ContainerProps = {
    children: ReactNode
}

export default function Container({children}: ContainerProps) {
    return <div className={containerStyle.container}>
        {children}
    </div>
}