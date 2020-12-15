import React from "react";
import classes from './FormsControl.module.css';
import {Field} from "redux-form";

export const Textarea = ({input, meta:{touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <>
            <textarea className={props.className + "  " + (hasError ? classes.error : "")} {...input}/>
        </>
    )
}

export const Input = ({input, meta:{touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <>
            <input className={props.className + "  " + (hasError ? classes.error : "")} {...input} {...props}/>
        </>
    )
}


export const createField = (component, className,  placeholder, name, validate, {...props}) => {
    return <Field component={component} className={className}  
                  placeholder={placeholder} name={name} validate={validate} {...props}/>
}