import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'

const ContextProvider = ({ children }) => {
    const [userName, setUserName] = useState("")
    const [userInfo, setUserInfo] = useState("")


    const token = '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'; // personal token to call the API
    const userLink = `https://api.github.com/users/${userName}`
    const userReposLink = `https://api.github.com/users/${userName}/repos`

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

            let data = await response.json();
            console.log(data.name);
            setUserInfo(data);

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <MyContext.Provider value={{ userInfo, setUserName, getUser }}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider
