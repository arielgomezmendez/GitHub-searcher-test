import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'

const ContextProvider = ({ children }) => {
    const [userName, setUserName] = useState("") //state to save the user name
    const [userInfo, setUserInfo] = useState("") //state to save the information of user
    const [userRepos, setUserRepos] = useState("") //state to save the  repositories of user
    const [error, setError] = useState(null)  //state to save the error

    const token = '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'; // personal token to call the API
    const userLink = `https://api.github.com/users/${userName}`
    //url to get the repositories sorted by creation date using ?sort=created
    const userReposLink = `https://api.github.com/users/${userName}/repos?sort=created`

    //Function to make the request to the API
    const getUser = async () => {
        const response = await fetch(
            userLink, {
            headers: {
                Authorization: `token ${token}`
            }
        });

        //Get the user information
        if (response.ok) {
            let data = await response.json();
            setUserInfo(data);
            //Get the user repositories
            const reposResponse = await fetch(userReposLink);
            const repositories = await reposResponse.json()
            // get the last 3 repos created by the user
            const recentRepos = repositories.slice(0, 3)
            setUserRepos(recentRepos)
            setError(null)
        }
        else {
            if (response.status === 404) {
                setError("Wrong user")
            }
            if (response.status === 401) {
                setError("Expired token")
            }
        }
    };
    return (
        <MyContext.Provider value={{ userInfo, setUserName, getUser, setUserRepos, userRepos, error, setError }}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider
