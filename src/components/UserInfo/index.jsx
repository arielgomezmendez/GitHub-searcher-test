import React, { useContext } from 'react'
import "./index.css"
import "./mobile.css"
import { IconNotebook, IconUsers } from '@tabler/icons-react';
import MyContext from '../../context/MyContext';

const UserInfo = () => {

    const { userInfo } = useContext(MyContext)
    return (
        <>
            <article className='userInfo'>
                <div className='userPicture'>
                    <img src={userInfo.avatar_url} alt="Avatar" />
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0
                            96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0
                            477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                        ></path>
                    </svg>
                </div>
                <h2 className='user'>{userInfo.name}</h2>
                <h2 className='userName'>{userInfo.login}</h2>
                <div className='icons'>
                    <IconNotebook /> <p className='number'>{`${userInfo.public_repos} public repos`}</p>
                    <IconUsers /> <p className='number'>{`${userInfo.followers} followers`}</p>
                </div>

                <p className='bio'>{userInfo.bio}</p>
            </article>
        </>
    )
}

export default UserInfo
