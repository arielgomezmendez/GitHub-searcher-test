import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'

const ContextProvider = ({ children }) => {
    const [userName, setUserName] = useState("") //state to save the user name
    const [userInfo, setUserInfo] = useState("") //state to save the information of user
    const [userRepos, setUserRepos] = useState("") //state to save the  repositories of user
    const [error404, setError404] = useState(false)  //state to save the error 404, wrong user


    const token = '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'; // personal token to call the API
    const userLink = `https://api.github.com/users/${userName}`
    const userReposLink = `https://api.github.com/users/${userName}/repos?sort=created` //url to get the repositories sorted by creation date using
    // ?sort=created

    //Function to make the request to the API
    const getUser = async () => {
        try {
            let response = await fetch(
                userLink, {
                headers: {
                    Authorization: `token ${token}`
                }
            });

            //Get the user information
            let data = await response.json();
            setUserInfo(data);

            //Get the user repositories
            let reposResponse = await fetch(userReposLink);
            let repositories = await reposResponse.json()
            // get the last 3 repos created by the user
            let recentRepos = repositories.slice(0, 3)
            setUserRepos(recentRepos)
            setError404(false)

        } catch (error) {
            //Catch error 404, wrong user
            setError404(true)
            console.log("Status", error.status)

        }
    };

    return (
        <MyContext.Provider value={{ userInfo, setUserName, getUser, setUserRepos, userRepos, error404, setError404 }}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider
