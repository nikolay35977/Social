import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfile, getUserStatus, updateStatus} from "../../redux/ProfileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileAPIContainer extends Component {
    id = this.props.match.params.userId;

    componentDidMount() {
        if (!this.id && this.props.isAuth) {
            this.id = this.props.authorizedUserId;
        }
        else{
        }
        this.props.getProfile(this.id);
        this.props.getUserStatus(this.id);
    }

    render = () => {
        return (
            <Profile profileData={this.props.UserProfile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        UserProfile: state.ProfilePage.UserProfile,
        currentId: state.ProfilePage.currentId,
        isFetching: state.ProfilePage.isFetchingNow,
        status: state.ProfilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {
    getProfile,
    getUserStatus,
    updateStatus
}), withRouter, withAuthRedirect)(ProfileAPIContainer);