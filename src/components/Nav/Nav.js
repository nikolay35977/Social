﻿import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = (props) => {
    let FriendElement = props.Data.map(el => <li key={el.id}>{el.name}</li>)
    return (
        <div className={classes.nav__inner}>
            <nav className={classes.nav}>
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs">Message</NavLink>
                </div>
                <div>
                    <NavLink to="/users">Users</NavLink>
                </div>
                <div>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div>
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
            </nav>
            <ul className={classes.friends__inner}>
                {FriendElement}
            </ul>
        </div>
    )
}


export default Nav;