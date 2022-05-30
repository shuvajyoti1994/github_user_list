import React from 'react'
import { useEffect, useState } from 'react';
import { GitLoding } from '../GitLoding';

function UseEffect() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    const getUsers = async () => {
        try {
            setLoading(false)
            const response = await fetch("https://api.github.com/users");
            setUser(await response.json());
        } catch (error) {
            setLoading(false)
            console.log(error);
        }

    }

    useEffect(() => {
        getUsers();
    }, []);

    if(loading){
        return <GitLoding/>
    }

    return (
        <>
            <h2>List of GitHub Users</h2>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>

                    {
                        user.map((elm) => {
                            return (
                                <div className='col-10 col-md-4 mt-5' key={elm.id}>
                                    <div className="card p-2">
                                        <div className='d-flex align-items-center'>
                                            <div className='image'><img src={elm.avatar_url} className='rounded' width="155" alt='_profPic'/></div>
                                            <div className='ml-3 w-100'>
                                                <h4 className='mb-0 mt-0 textLeft'>{elm.login}</h4><span className='textLeft'>Web Devloper</span>
                                                <div className='p-2 m-2 bg-danger d-flex justift-content-between rounded text-white stats'>
                                                    <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>
                                                    <div className='d-flex flex-column'><span className='followers mx-2'>Followers</span><span className='number2'>980</span></div>
                                                    <div className='d-flex flex-column'><span className='rating mx-2'>Rating</span><span className='number3'>8.9</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }


                </div>
            </div>

        </>
    )
}

export default UseEffect;