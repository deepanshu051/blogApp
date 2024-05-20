import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pageination from '../components/Pageination';

const TagPage = () => {
    const navigation =useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
    console.log(tag);
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <Header/>
        <div className=' flex gap-x-3 text-center mt-20 -mb-20'>
            <button className='border border-gray-400 px-3 py-2 rounded-lg' onClick={()=> navigation(-1)}>
                back
            </button>
            <h2 className='text-center text-lg font-bold flex gap-x-2 items-center'>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pageination/>
    </div>
  )
}

export default TagPage