import React, { useState } from 'react'
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
            console.log(data);
            setUserInfo(data);

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
