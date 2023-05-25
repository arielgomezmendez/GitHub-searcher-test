import React from 'react'
import "./index.css"
import githubLogo from "../../assets/github-logo.png"


const Search = () => {
    return (
        <div className="group">
            <img src={githubLogo} alt="GitHub" className='gitHubLogo' />
            <input placeholder="Searth the internet..." type="text" name="text" class="input" />
            <button>Button</button>
        </div>
    )
}

export default Search
