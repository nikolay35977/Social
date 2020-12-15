﻿import React from "react";
import Nav from "./Nav";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        Data: state.SideBar.FriendsData
    }
}

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;