import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Spinner from '../components/Spinner';

const BlogPage = () => {

  const newBaseUrl="https://codehelp-apis.vercel.app/api/"
  const [blog,setBlog]=useState(null);
  const [relatedblogs,setRelatedBlogs]=useState([]);
  const location=useLocation();
  const navigation=useNavigate();
  const {loading,setLoading}=useContext(AppContext);

  const blogId=location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log(url);
    try{
      const res=await  fetch(url);
      const data=await  res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs)
    }
    catch(error){
      console.log("Error is coming when blog titlr is clicked")
      setBlog(null)
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();    
    }
  },[location.pathname]);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
    <Header/>
    <div className=' flex gap-x-3 text-center mt-20 -mb-20'>
      <button className='border border-gray-400 px-3 py-2 rounded-lg' onClick={()=>navigation(-1)}>
        Back
      </button>
    </div>

    <div className=' w-11/12 max-w-[750px] py-7 flex flex-col gap-y-7 mt-20 mb-20 shadow-md px-4 ralative'>

    {
      loading?
      (<div>
        <p><Spinner/></p>
        </div>):
        blog?
        (<div>
        <BlogDetails post={blog}/>
        <h2>Related Blogs</h2>
        {
          relatedblogs.map((post)=>(
            <div key={post.id}>
            <BlogDetails post={post} />
            </div>
          ))
        }
        </div>) :
        (<div>
          <p>No blogs found</p>
          </div>)
    }
    </div>
        
    </div>
  )
}

export default BlogPage