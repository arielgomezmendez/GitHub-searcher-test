import React, { useEffect, useState } from 'react'
import "./index.css"
import githubLogo from "../../assets/github-logo.png"


const Search = () => {

    const [userName, setUser] = useState("")
    const [userInfo, setUserInfo] = useState("")

    const token = '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'; // personal token to call the API

    //Function to get the user name
    const onchange = (event) => {
        setUser(event.target.value)
    }

    //Function to make the request to the API
    const getUser = async () => {
        try {
            console.log("Funcion obtain user ejecutada")
            let response = await fetch(
                `https://api.github.com/users/${userName}`, {
                headers: {
                    Authorization: `token ${token}`
                }
            });

            let data = await response.json();
            setUserInfo(data);
            console.log(userInfo);

        } catch (error) {
            console.log(error)
        }
    };

    const onsubmit = (event) => {
        event.preventDefault()
        getUser(token, userName)
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
