import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blogState } from "./atoms/blogState";
import { useRecoilState, useRecoilValue } from "recoil";



const Home = ({ toggleFavorite }) => {


    const blogs = useRecoilValue(blogState)


    return (
        <div style={{ "marginTop": "100px" }} className="blogCollection">
            <h1 className="blogHeading">Blogs</h1>
            {blogs.map(blog=>
            <Card style={{ 
            "width": '40rem',
             "boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
             "borderRadius":"1em",
             "margin":"2em"
             }} key={blog.id}>
                <Card.Body>
                    <Card.Title style={{"fontSize":"3em"}}>{blog.heading} <hr /></Card.Title>
                    <Card.Text style={{"display":"flex","alignItems":"center","justifyContent":"center","height": "13rem", "fontSize":"1.5em"}}>
                        <span>{blog.content.substring(0,200)} <span style={{"color":"grey"}}>.......</span></span>
                    </Card.Text>
                    <Button variant="primary"><a href={`/blog/${blog.id}`} style={{"textDecoration":"none","color":"white"}}>Read More</a></Button> <br />
                    <Button variant="tertiary" onClick={()=>toggleFavorite(blog.id, blogs)}>{blog.favorite? '❤️' :'🤍'}</Button>
                </Card.Body>
            </Card>
                )}
        </div>
    )
}

export default Home