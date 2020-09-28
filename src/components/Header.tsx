import React from 'react'

type HeadProp = {
    text: string,
    subtext: string
}

export default ({text, subtext}: HeadProp) => {
    return <div>
        <h1>{text}</h1>
        <h3>{subtext}</h3>
    </div>
}