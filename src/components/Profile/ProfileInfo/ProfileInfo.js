﻿import React from "react";
import classes from "./ProfileInfo.module.css";
import ProfileStatusHOOK from "./ProfileStatus/ProfileStatusHOOKS";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from "./../../../img/profile.jpg";

const ProfileInfo = (props) => {
    let descriptionArray = ["Обо мне:", "Поиск работы:", "Почему?", "Контакты:"],
        parsePropsArray = [props.profileData.aboutMe, props.profileData.lookingForAJob ? "Ищу работу" : "Не ищу работу", props.profileData.lookingForAJobDescription],
        social = ["ВКонтакте", "Twitter", "Instagram"],
        socialLinks = [props.profileData.contacts.vk, props.profileData.contacts.twitter, props.profileData.contacts.instagram];
    return (
        <div className={classes.profile__inner}>
            <div className={classes.img__name__inner}>
                <div className={classes.img__inner}>
                    <img src={props.profileData.photos.large != null ? props.profileData.photos.large : userPhoto}
                         className={classes.img__item} alt="image"/>
                </div>
                <div className={classes.name__inner}>
                    {props.profileData.fullName != null ? props.profileData.fullName : "Безымянный"}
                </div>
            </div>
            {/*<ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
            */}
            <ProfileStatusHOOK status={props.status} updateStatus={props.updateStatus}/>
            <div className={classes.inner}>
                <div className={classes.description__inner}>
                    <div className={classes.description}>
                        {descriptionArray.map((el, key) => {
                            return <div key={key} className={classes.item__left}>{el}</div>
                        })}
                    </div>
                    <div className={classes.description}>
                        {parsePropsArray.map((el, key) => {
                            return <div key={key} className={classes.item__right}>{el}</div>
                        })}
                    </div>
                </div>
                <div className={classes.social__inner}>
                    {social.map((el, key) => {
                        return <a target="_blank" key={key} href={socialLinks[key]}
                                  className={classes.social__item}>{el}</a>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;