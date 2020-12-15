import React from "react";
import classes from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../utils/formsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error, urlCaptcha}) => {

    return <>
        <form onSubmit={handleSubmit}>
            <div className={classes.inner__input}>
                {createField(Input, classes.email__and__password, "email", "email", [required], {type: "email"})}
                {createField(Input, classes.email__and__password, "password", "password", [required], {type: "password"})}
            </div>
            <div className={classes.checkbox__inner}>
                {createField(Input, null, null, "rememberMe", [], {type: "checkbox"})}Remember me
            </div>
            {error && <div className={classes.summary__error}>
                {error}
            </div>}
            <div className={classes.inner__btn}>
                <button className={classes.btn}>SING IN</button>
            </div>
            {urlCaptcha ?
                <div className={classes.captcha__inner}>
                    <img className={classes.captcha} alt="CAPTCHA" src={urlCaptcha}/>
                    {createField(Input, null, "captcha", "captcha", [required], {type: "captcha"})}
                </div> : <div/>}
        </form>
    </>
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.LoginUser(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <>
        <div className={classes.inner}>
            <div className={classes.inner__title}>
                Account Login
            </div>
            <ReduxLoginForm onSubmit={onSubmit} urlCaptcha={props.urlCaptcha}/>
            <div className={classes.inner__text}>
                <div className={classes.forgot}>
                    Forgot <a href="/">Username / Password?</a>
                </div>
                <div className={classes.create}>
                    Create an account? <a href="/">Sign up</a>
                </div>
            </div>
        </div>
    </>
}

export default Login