import React, { useContext } from 'react'
import "./index.css"
import UserInfo from '../UserInfo';
import MyContext from '../../context/MyContext';
import BackIllustration from '../BackIllustration';
import ReposList from '../ReposList';
import "./mobile.css"


const GitHubUser = () => {
    const { userRepos, error404, setError404 } = useContext(MyContext)
    return (
        //User information
        <section className='mainContainer'>
            {error404 && <p className='wrongUser'>Wrong user</p>}

            {
                !Array.isArray(userRepos) ? (
                    <BackIllustration />
                ) : (
                    <>
                        <UserInfo />
                        <ReposList />
                    </>
                )
            }
        </section >
    )
}

export default GitHubUser
