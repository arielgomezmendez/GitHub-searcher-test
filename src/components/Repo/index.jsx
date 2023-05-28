import React, { useContext } from 'react'
import "./index.css"
//import "./mobile.css"
import MyContext from '../../context/MyContext'

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
