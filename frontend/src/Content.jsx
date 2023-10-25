import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Blog from './Blog';
import { useRecoilState, useSetRecoilState } from "recoil";
import {blogState} from './atoms/blogState'
import BlogForm from "./BlogForm";
import Blogs from "./blogs";

const Content = () =>{

    const [blogs,setBlogs] = React.useState(Blogs)

    const toggleFavorite = (id, blogs) =>{
        setBlogs(blogs.map(blog=> blog.id===id? {...blog, favorite : !blog.favorite} : blog))
    }

    console.log(blogs)

    return(
        <Routes>
            <Route path="/" element={<Home toggleFavorite={toggleFavorite}/>}/>
            <Route path={`/blog/:id`} element={<Blog/>}/>
            <Route path="/create-blog" element={<BlogForm/>} />
        </Routes>
    )
}

export default Content