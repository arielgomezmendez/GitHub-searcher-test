import React from 'react'
import "./index.css"
import githubLogo from "../../assets/github-logo.png"


const Search = () => {
    return (
        <div className="group">
            <picture>
                <img src={githubLogo} alt="GitHub" />
            </picture>
            <input placeholder="Searth the internet..." type="text" name="text" class="input" />
        </div>
    )
}

export default Search
