import React, {Component} from "react";
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    setFollowingProgress,
    deleteFollow,
    putFollow
} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../commonFiles/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersAPIContainer extends Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        if (this.props.Users.length === 0) {
            this.props.getUsers(currentPage, pageSize);
        }
    }

    onPageChange = (el) => {
        let {pageSize} = this.props;
        this.props.setCurrentPage(el);
        this.props.getUsers(el, pageSize);
    }

    render = () => {
        return <>
            {this.props.isFetchingNow ? <Preloader/> :
                <Users currentPage={this.props.currentPage} Users={this.props.Users} onPageChange={this.onPageChange}
                       followingInProgress={this.props.followingInProgress} deleteFollow={this.props.deleteFollow}
                       putFollow={this.props.putFollow}/>}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage.Users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetchingNow: state.UsersPage.isFetchingNow,
        followingInProgress: state.UsersPage.followingInProgress
    }
}   

let mapDispatchToProps = {
    setCurrentPage,
    setFollowingProgress,
    getUsers,
    deleteFollow,
    putFollow
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(UsersAPIContainer);