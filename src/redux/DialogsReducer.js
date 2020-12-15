import {MessageAPI} from "../api/Api";
import {reset} from 'redux-form';

const SET_NEW_MESSAGE = 'SET-NEW-MESSAGE';

let initialState = {
    MessageData: [
        {path: 1, text: "Dima"},
        {path: 1, text: "Sangdfgya"},
        {path: 2, text: "Dimodfgfdgdfgn"},
        {path: 2, text: "Aledfgdfgdddx"},
        {path: 3, text: "Lodffgdfgfdx"}
    ],
    DialogData: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sanya"},
        {id: 3, name: "Dimon"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Lox"}
    ]
};
const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_NEW_MESSAGE:
            debugger;
            let newMessage = {
                path: action.userId,
                text: action.message
            }
            stateCopy.MessageData = [...state.MessageData];
            stateCopy.MessageData.push(newMessage)
            stateCopy.MessageText = '';
            return stateCopy;
        default:
            return state;
    }
}

const setNewMessage = (userId, message) => ({
    type: SET_NEW_MESSAGE,
    userId,
    message
})

export const sendNewMessage = (message, userId) => {
    userId = 1;
    return (dispatch) => {
        dispatch(setNewMessage(userId, message.message));
        dispatch(reset('dialog'));
        /*MessageAPI.postNewMessageAPI(userId, message.message).then(data => {
                debugger;
                if (data.resultCode === 0) {
                    dispatch(setNewMessage(userId, message.message));
                } else {
                    alert('ERROR');
                }
            })*/
    }
}

export default dialogsReducer