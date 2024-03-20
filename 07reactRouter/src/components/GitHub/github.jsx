import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/amit41z')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 p-4 bg-gray-600 text-white text-2xl'>
      GitHub Followers : {data.followers}
      <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default github

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/amit41z')
    return response.json()
}