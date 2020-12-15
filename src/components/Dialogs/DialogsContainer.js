import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessage} from "../../redux/DialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => ({
    Data: state.MessagePage
})

let mapDispatchToProps = {
    onSubmit: sendNewMessage
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);