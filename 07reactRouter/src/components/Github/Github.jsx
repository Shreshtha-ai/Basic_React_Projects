import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    //const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Shreshtha-ai')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-700 text-white p-8 text-3xl rounded-2xl shadow-xl max-w-lg mx-auto'>
            GitHub followers: {data.followers}
            <img src={data.avatar_url} alt="Github profile pic" className="w-48 h-48 rounded-full border-4 border-orange-500 shadow-lg mx-auto mt-4 object-cover" />
        </div>
    )

}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Shreshtha-ai')
    return response.json()
}
