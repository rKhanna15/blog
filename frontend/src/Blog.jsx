import React from "react";
import Container from 'react-bootstrap/Container';
import { blogState } from "./atoms/blogState";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

const Blog = () => {
    const [x, setX] = React.useState('')
    const [blogs,setBlogs] = useRecoilState(blogState)
    
    const addBlog = () => {
        setBlogs([...blogs, {id:3,}])
    }

    const toggleFavorite = (id) =>{
        setBlogs(blogs.map(blog=> blog.id===id? {...blog, favorite : !blog.favorite} : blog))
    }

    const {id} = useParams()
    const blogObj = blogs[id-1]


    return (
        <div className="wrapper">
            <div>
                <button onClick={()=>toggleFavorite(blogObj.id)}  className="blogFavorite">
                {blogObj.favorite? '❤️' :'🤍'}
                </button>
                    <button onClick={()=>addBlog()}>click</button>
            </div>
            <h1 className="blogHeading">{blogObj.heading}</h1>
            <p className="blogContent">
                {blogObj.content}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente aperiam fugit doloremque explicabo, ab eum sed perspiciatis quam, blanditiis placeat iusto a minus recusandae quaerat ut architecto voluptatum quisquam? In a voluptas veritatis, facere nihil vel repellat exercitationem ipsa labore debitis eaque, quidem sint quo tempora fuga quis ratione distinctio eveniet molestias nisi alias quisquam? Tempora consequuntur suscipit earum dignissimos accusantium totam qui numquam incidunt aliquam itaque, velit vero sequi, illum ipsa, ipsum quo beatae hic perspiciatis. Sed nisi ipsa odio iste accusamus perferendis velit iure consequatur. Pariatur commodi, ad quisquam architecto non aspernatur quae et iste voluptatibus maxime reiciendis numquam accusamus, sed nobis dolore labore tempore! Officia eum labore veritatis deserunt laudantium, sint magni iure nostrum itaque expedita ab veniam provident autem dolores nisi. Repellat cumque officiis exercitationem ad corporis esse laudantium similique, placeat eos nesciunt voluptates hic, repudiandae odio ipsam unde pariatur voluptas veniam iusto. Ipsam sit officia non blanditiis, omnis voluptatibus laborum eligendi consequuntur laudantium at. Harum consequuntur error neque dolore, fuga voluptate placeat! Minus quod reiciendis rem incidunt vel, tenetur ipsum modi corrupti, omnis deserunt neque possimus. In possimus quis id nesciunt corporis saepe autem sed magni reprehenderit eos. Rerum ut adipisci numquam. Ratione, possimus.
            </p>
            <hr />
            <div className="blogInfo">
                <p>
                    Author Name: {blogObj.author} <br />
                    Publish Date: {blogObj.publishDate.toDateString()} <br />
                    {blogObj.languages ?
                        (blogObj.languages.length === 1 ? "Language: " + blogObj.languages.map(lng => '' + lng) : "Languages: " + blogObj.languages.map(lng => ' ' + lng + ''))
                        : ""} <br />
                    {blogObj.frameworks ?
                        (blogObj.frameworks.length === 1 ? "Framework: " + blogObj.frameworks.map(lng => '' + lng) : "Frameworks: " + blogObj.frameworks.map(lng => ' ' + lng + ''))
                        : ""} <br />
                    {blogObj.dependencies ?
                        (blogObj.dependencies.length === 1 ? "Dependency: " + blogObj.dependencies.map(lng => '' + lng) : "Dependencies: " + blogObj.dependencies.map(lng => ' ' + lng + ''))
                        : ""}
                </p>

            </div>
        </div>
    )
}

export default Blog