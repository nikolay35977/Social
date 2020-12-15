import React from "react";
import classes from "./Post.module.css";
import userPhoto from "./../../../../img/dota2.jpg";


const Post = (props) => {
    return(
        <div className={classes.item}>
            <img src={props.PictureProfile ? props.PictureProfile : userPhoto}/>
            <div className={classes.item__text}>
                {props.message}
            </div>
            <div className={classes.likes__inner}>
                {props.likes} <span className={classes.like}>❤</span>
            </div>
        </div>
    )
}

export default Post;