import React, { useContext, useState } from 'react'
import "./index.css"
import githubLogo from "../../assets/github-logo.png"
import MyContext from '../../context/MyContext'


const Search = () => {
    //Get info from the provider Contextprovider
    const { setUserName, getUser } = useContext(MyContext)

    //Function to get the user name
    const onchange = (event) => {
        setUserName(event.target.value)
    }

    const onsubmit = (event) => {
        event.preventDefault()
        getUser()
    }

    return (
        <div className="search">
            <img src={githubLogo} alt="GitHub" className='gitHubLogo' />
            <form onSubmit={onsubmit}>
                <input placeholder="User name" type="text" name="text" className="input" onChange={onchange} />
                <button >Search</button>
            </form>

        </div>
    )
}

export default Search
