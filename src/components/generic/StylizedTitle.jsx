import React from 'react'

function StylizedTitle({text, classList}) {
    const classes = {tag: 'h2', lineTag: 'eq-h2'}
    const HeadingTag = classes.tag

    return (
        <div className={`stylized-title d-flex align-items-center fw-bold ` + classList}>
            <span className={`text-highlight ${classes.lineTag} ms-1 me-2 pe-1`}>&gt;</span>
            <HeadingTag className={`mb-0 fw-bold eq-h2`} dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    )
}

export default StylizedTitle