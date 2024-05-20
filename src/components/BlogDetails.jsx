import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
        <span className='text-lg font-bold hover:underline '>{post.title}</span>
        </NavLink>
        <p>
            By {" "}
            <span className='italic'>{post.author}</span>
            {" "}On {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className='font-bold text-sm hover:underline'>{post.category}</span>
            </NavLink>
        </p>
        <p>Posted on {post.date}</p>
        <p className=' mt-4'>{post.content}</p>
        <div>
            {post.tags.map((tag,index)=>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span className=' text-blue-600 hover:underline m-1'>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )

}

export default BlogDetails