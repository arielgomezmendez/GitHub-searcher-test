import React from 'react'
import "./index.css"
import Repo from '../Repo';
import UserInfo from '../UserInfo';


const GitHubUser = () => {
    return (
        //User information
        <section className='mainContainer'>
            <UserInfo />
            {/*List of resents repositories */}
            <ul className='repositoriesList'>
                <Repo />
            </ul>
            <article className='recentSearches'>
                <h1>Cards</h1>
            </article>
        </section>
    )
}

export default GitHubUser
