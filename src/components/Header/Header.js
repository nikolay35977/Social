﻿import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.img}
                 src="https://icon-library.com/images/32x32-youtube-icon/32x32-youtube-icon-7.jpg"/>
            <div className={classes.login__inner}>
                {props.photoSrc ? <img src={props.photoSrc}/> :
                    <img src="https://www.soundandvision.ee/wp-content/uploads/2019/05/profile-img.jpg" width="30"
                         height="30"/>}
                {props.isAuth ? <div className={classes.login__logout}>
                        <div className={classes.login}>{props.login}</div>
                        <div className={classes.logout} onClick={props.LogoutUser}>Loguot</div>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;