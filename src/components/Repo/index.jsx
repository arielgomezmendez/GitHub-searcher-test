import React, { useContext } from 'react'
import "./index.css"
import MyContext from '../../context/MyContext'

const Repo = ({ name, description }) => {
    return (
        <>
            <li className='repo'>
                <h1 className='repoName'>{name}</h1>
                <p className='description'>{description || "Does not have description"}</p>
            </li>

        </>
    )
}

export default Repo
