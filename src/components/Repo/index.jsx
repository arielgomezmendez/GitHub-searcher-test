import React, { useState } from 'react'
import "./index.css"

const Repo = () => {
    const [userName, setUserName] = useState("")
    const [userInfo, setUserInfo] = useState("")

    const token = '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'; // personal token to call the API

    //Function to make the request to the repositories link
    const getRepos = async () => {
        try {
            console.log("Funcion para obtener repos")
            let response = await fetch(
                `https://api.github.com/users/${userName}/repos`, {
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
        <>
            <li className='repo'>
                <h1 className='repoName'>Nombre del repositorio</h1>
                <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </li>

        </>
    )
}

export default Repo
