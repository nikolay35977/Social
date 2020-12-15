import React, {useEffect, useState} from "react";
import classes from "./ProfileStatus.module.css";

const ProfileStatusHOOK = React.memo((props) => {

        let [editMode, setEditMode] = useState(false);
        let [status, setStatus] = useState(props.status);

        useEffect(() => {
            setStatus(props.status);
        }, [props.status])

        let activateEditMode = () => {
            setEditMode(true);
        }

        let deactivateEditMode = () => {
            setEditMode(false);
            props.updateStatus(status);
        }

        let onStatusChange = (e) => {
            setStatus(e.currentTarget.value)
        }

        return (
            <div className={classes.status__inner}>
                {!editMode &&
                <div className={classes.text__inner}>
                    <span onDoubleClick={activateEditMode}>
                        {props.status === "" ? "-----" : props.status}
                    </span>
                </div>
                }
                {editMode &&
                <div className={classes.input__inner}>
                    <span>
                        <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
                    </span>
                </div>
                }
            </div>
        );
    }
)

export default ProfileStatusHOOK;