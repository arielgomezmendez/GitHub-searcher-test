import React, { useContext } from 'react'
import "./index.css"
import "./mobile.css"
import UserInfo from '../UserInfo';
import MyContext from '../../context/MyContext';
import BackIllustration from '../BackIllustration';
import ReposList from '../ReposList';
<<<<<<< HEAD
import "./mobile.css"
=======
>>>>>>> f415529216dc8b00ac6bbdbebcdbf084fa57e396

const GitHubUser = () => {
    const { userRepos, error } = useContext(MyContext)

    return (
        //User information
        <section className='mainContainer'>
            {error && <p className='wrongUser'>{error}</p>}
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
