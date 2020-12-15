import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewPost} from "../../../redux/ProfileReducer";

let mapStateToProps = (state) => {
    return {
        PostsData: state.ProfilePage.PostsData,
        NewPostText: state.ProfilePage.NewPostText,
        PictureProfile: state.ProfilePage.UserProfile.photos.small
    }
}

let mapDispatchToProps = {
    onSubmit: addNewPost
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;