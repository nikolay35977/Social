import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Messages from "./Dialog/Messages";
import ReduxDialogForm from "./DialogForm";


const Dialogs = (props) => {
    let DialogElement = props.Data.DialogData.map(el => <Dialog id={el['id']} name={el['name']} key={el['id']}/>
    )

    let MessageElement = props.Data.MessageData.map(el => <Messages message={el['text']} path={el['path']}
                                                                    key={el['id']}/>)
    return (
        <div className={classes.inner}>
            <div className={classes.dialogs}>
                {DialogElement}
            </div>
            <div className={classes.dialog}>
                <div className={classes.message__inner}>
                    <div className={classes.messages}>
                        {MessageElement}
                    </div>
                </div>
                <div>
                    <ReduxDialogForm onSubmit={props.onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;