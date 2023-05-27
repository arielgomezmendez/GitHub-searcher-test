import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'

const ContextProvider = ({ children }) => {
    const [userName, setUserName] = useState("") //state to save the user name
    const [userInfo, setUserInfo] = useState("") //state to save the information of user
    const [userRepos, setUserRepos] = useState("") //state to save the  repositories of user


    const token = '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'; // personal token to call the API
    const userLink = `https://api.github.com/users/${userName}`
    const userReposLink = `https://api.github.com/users/${userName}/repos` //url of repositories

    //Function to make the request to the API
    const getUser = async () => {
        try {
            console.log("Funcion obtain user ejecutada")
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
            setUserRepos(repositories)
            console.log(repositories)
            userRepos.map((e, i) => {
                console.log(userRepos[i].name)
            });

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <MyContext.Provider value={{ userInfo, setUserName, getUser, setUserRepos, userRepos }}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider
