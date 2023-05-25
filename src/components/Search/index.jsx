import React from 'react'
import "./index.css"
import githubLogo from "../../assets/github-logo.png"


const Search = () => {
    return (
        <div className="group">
            <img src={githubLogo} alt="GitHub" className='gitHubLogo' />
            <input placeholder="User name" type="text" name="text" class="input" />
            <button>Search</button>
        </div>
    )
}

export default Search
