import React from "react";
import classes from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength50, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../utils/formsControls/FormsControls";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.item}>
            <Field className={classes.textarea__inner} component={Textarea} name={"postText"}
                   validate={[required, maxLength50]}/>
            <button className={classes.button__inner}>New Post</button>
        </form>
    )
}

const ReduxPostForm = reduxForm({
    form: 'post'
})(PostForm)

export default ReduxPostForm;
