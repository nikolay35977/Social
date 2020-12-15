import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (OldComponent) => {
    class RedirectComponent extends Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>
            return (
                <OldComponent {...this.props}/>
            );
        }
    }

    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    let ConnectedAuthComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthComponent;
}