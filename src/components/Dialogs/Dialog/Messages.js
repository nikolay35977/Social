import React from "react";
import classes from "./Messages.module.css";
import {Route, BrowserRouter} from "react-router-dom";

const Messages = (props) => {
    return (
        <BrowserRouter>
            <Route exact to = {"/dialogs/" + props.path}>
                <div>
                    {props.message}
                </div>
            </Route>
        </BrowserRouter>
    )
}

export default Messages;