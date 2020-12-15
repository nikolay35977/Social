import React, {Component} from "react";
import classes from "./ProfileStatus.module.css";

class ProfileStatus extends Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }
    
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div className={classes.status__inner}>
                {!this.state.editMode &&
                    <div className={classes.text__inner}>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status === "" ? "-----" : this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                <div className={classes.input__inner}>
                    <span>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode}/>
                    </span>
                    <span className={classes.button__inner}>
                        <button onClick={this.props.updateStatus}> Сохранить </button>
                    </span>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus