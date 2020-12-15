﻿import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../commonFiles/Preloader";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    if (!props.profileData) {
        return <Preloader/>
    }
    
    return (
        <div className={classes.inner}>
            <ProfileInfo profileData={props.profileData} updateStatus = {props.updateStatus} status = {props.status}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;