﻿﻿import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {LogoutUser} from "../../redux/AuthReducer";


class HeaderContainer extends Component{
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photoSrc: state.auth.photoSrc
})

export default connect(mapStateToProps,{LogoutUser})(HeaderContainer);