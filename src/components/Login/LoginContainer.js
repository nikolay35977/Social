import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {LoginUser} from "../../redux/AuthReducer";


const LoginContainer = (props) => {
    return <>
        <Login LoginUser={props.LoginUser} isAuth={props.isAuth} urlCaptcha={props.urlCaptcha}/>
    </>
}

let mapStateToProps = (state) =>
    ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        urlCaptcha: state.auth.urlCaptcha
    })

export default connect(mapStateToProps, {LoginUser})(LoginContainer);