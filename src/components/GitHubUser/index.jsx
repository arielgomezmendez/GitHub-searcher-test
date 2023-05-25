import React from 'react'
import { IconNotebook, IconUsers } from '@tabler/icons-react';
import "./index.css"


const GitHubUser = () => {
    return (
        //User information
        <section className='mainContainer'>
            <article className='userInfo'>
                <div className='userPicture'>
                    <img src="" alt="" />
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0
                            96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0
                            477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                        ></path>
                    </svg>
                </div>
                <h2 className='user'>Name</h2>
                <h2 className='userName'>Username</h2>
                <div className='icons'>
                    <IconNotebook /> <p className='number'>4</p>
                    <IconUsers /> <p className='number'>4</p>
                </div>

                <p className='bio'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br></br>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </article>

            <article className='repositoriesList'>
                <h1>Nombre del repositorio</h1>
                <p>Descripcion</p>
            </article>

            <article className='recentSearches'>
                <h1>Cards</h1>
            </article>
        </section>
    )
}

export default GitHubUser
