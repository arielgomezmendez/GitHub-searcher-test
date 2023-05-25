import React from 'react'
import "./index.css"
import githubLogo from "../../assets/github-logo.png"


const Search = () => {
    return (
        <div className="search">
            <img src={githubLogo} alt="GitHub" className='gitHubLogo' />
            <form>
                <input placeholder="User name" type="text" name="text" class="input" />
                <button>Search</button>
            </form>

        </div>
    )
}

export default Search
