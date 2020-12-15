import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../../img/profile.jpg";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, deleteFollow, putFollow, key}) => {
    return (<div className={classes.item__inner} key={key}>
        <div className={classes.item__picture__btn}>
            <div className={classes.img__inner}>
                {/*<img src={el.picUrl} className={classes.img__item} alt="image"/>*/}
                <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={classes.img__item} alt="image"/>
                </NavLink>
            </div>
            <div className={classes.btn__inner}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              className={classes.btn}
                              onClick={() => {
                                  deleteFollow(user.id);
                              }
                              }>UNFOLLOW</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              className={classes.btn}
                              onClick={() => {
                                  putFollow(user.id);
                              }}>FOLLOW</button>}
            </div>
        </div>
        <div>

        </div>
        <div className={classes.description__inner}>
            <div className={classes.name__description}>
                <div className={classes.name__surname}>
                                    <span className={classes.name__inner}>
                                        {/*{el.fullName.name}*/}
                                    </span>
                    <span className={classes.surname__inner}>
                                        {/*{el.fullName.surname}*/}
                        {user.name}
                                    </span>
                </div>
                <div className={classes.status}>
                    {user.status}
                </div>
            </div>
            <div className={classes.location__inner}>
                <div className={classes.city}>
                    {/*{el.location.city}*/},
                </div>
                <div className={classes.county}>
                    {/*{el.location.Country}*/}
                </div>
            </div>
        </div>
    </div>
);
}

export default User;