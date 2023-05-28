import React, { useContext } from 'react'
import Repo from '../Repo'
import MyContext from '../../context/MyContext'
import "./index.css"
import "./mobile.css"

const ReposList = () => {
    const { userRepos } = useContext(MyContext)
    return (
        <>
            {/*List of resents repositories */}
            <article className='repositoriesList'>
                <h1 className='title'>Last repositories</h1>
                <ul >
                    {/* Array.isArray(userRepos) checks if userRepos is an array before executing the map method.
                    If userRepos is not an array, the code inside the map will not execute and avoid the error. */}
                    {Array.isArray(userRepos) && userRepos.map((repo, index) => (
                        <Repo key={repo.id} name={repo.name} description={repo.description} />
                    ))}
                </ul>
            </article>
        </>
    )
}

export default ReposList
