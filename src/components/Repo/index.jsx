import React, { useContext } from 'react'
import "./index.css"

const Repo = ({ name, description }) => {
    return (
        <>
            <li className='repo'>
                <h1 className='repoName'>{name}</h1>
                <p className='description'>{description || "Description don`t exist"}</p>
            </li>

        </>
    )
}

export default Repo
