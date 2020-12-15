import React from "react";
import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../utils/formsControls/FormsControls";
import {maxLength50, required} from "../../utils/validators/validators";

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.dialog__bottom}>
            <Field component = {Textarea} name = "message" className={classes.textarea__inner} validate={[required, maxLength50]}/>
            <button type="submit" className={classes.button__inner}>
                Отправить
            </button>
        </form>
    )
}

const ReduxDialogForm = reduxForm({
    form: 'dialog'
})(DialogForm)

export default ReduxDialogForm;
