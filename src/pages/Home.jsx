import React from 'react'
import Header from '../components/Header'
import Pageination from '../components/Pageination'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <Header />
        <div className='w-full flex justify-center items-center'>

        <Blogs/>
        <Pageination />
        </div>
    </div>
  )
}

export default Home