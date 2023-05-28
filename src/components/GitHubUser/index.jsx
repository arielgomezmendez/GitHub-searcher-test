import React, { useContext } from 'react'
import "./index.css"
import UserInfo from '../UserInfo';
import MyContext from '../../context/MyContext';
import BackIllustration from '../BackIllustration';
import ReposList from '../ReposList';
import "./mobile.css"


const GitHubUser = () => {
    const { userRepos } = useContext(MyContext)
    return (
        //User information
        <section className='mainContainer'>
            {!Array.isArray(userRepos) ? (
                <BackIllustration />
            ) : (
                <>
                    <UserInfo />
                    <ReposList />
                </>
            )}
        </section>
    )
}

export default GitHubUser
