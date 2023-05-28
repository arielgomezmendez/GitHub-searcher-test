import React from 'react'
import backIllustration from "../../assets/illustration-github.png"
import "./index.css"

const BackIllustration = () => {
    return (
        <div className='backIllustration'>
            <h1>Search a GitHub user</h1>
            <img src={backIllustration} alt='Github Illustration' />
        </div>
    )
}

export default BackIllustration
