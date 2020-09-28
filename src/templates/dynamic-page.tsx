import React from 'react'

export default ({ pageContext }) => {
    return <div>
        <div>
            Data from Dynamic page {pageContext.name}
            <p>Content from the dynamic page </p>
        </div>
    </div>
}