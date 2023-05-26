import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'

const ContextProvider = ({ children }) => {
    const [userName, setUserName] = useState("")
    const [userInfo, setUserInfo] = useState("")

    const token = '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'; // personal token to call the API

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
            console.log(data.name);
            setUserInfo(data);

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <MyContext.Provider value={{ setUserName, getUser }}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider
