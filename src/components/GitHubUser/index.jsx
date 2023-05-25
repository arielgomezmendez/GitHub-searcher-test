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
            <article className='repositoriesList'>
                <h1 className='title'>Last repositories</h1>
                <ul >
                    <Repo />
                    <Repo />
                    <Repo />
                </ul>
            </article>

            <article className='recentSearches'>
                <h1>Cards</h1>
            </article>
        </section>
    )
}

export default GitHubUser
