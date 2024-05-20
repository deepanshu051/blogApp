import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

    //consume
    const {posts,loading}=useContext(AppContext);

  return (
    <div className=' w-11/12 max-w-[750px] py-7 flex flex-col gap-y-7 mt-20 mb-20 shadow-md px-4 ralative'>
        {
            loading?(<Spinner/>):(
                
                    posts.length===0?(
                        <div>
                        <p>No posts found</p>
                        </div>
                    ):(posts.map((post)=>(
                        <BlogDetails key={post.id} post={post}/>
                    )))
                
            )
        }
    </div>
  )
}

export default Blogs