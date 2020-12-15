import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostForm from "./PostForm";

const MyPosts = (props) => {
    
    let PostsElements = props.PostsData.map(el => <Post message = {el.text} likes = {el.likes} key = {el.id}/>)
    PostsElements.reverse();
    
    
    return (
        <div>
            <div className={classes.text__inner}>My Posts</div>
            <PostForm onSubmit = {props.onSubmit} />
            {PostsElements}
        </div>
    )
}

export default MyPosts;