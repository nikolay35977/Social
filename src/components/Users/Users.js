import React from "react";
import classes from "./Users.module.css";
import Paginator from "./../commonFiles/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div className={classes.users__inner}>
            <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            {
                props.Users.map(el => {
                    return <User user={el} deleteFollow={props.deleteFollow}
                                 followingInProgress={props.followingInProgress} putFollow={props.putFollow} key={el.id}/>
                })
            }
        </div>
    );
}

export default Users;