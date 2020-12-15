import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

let store = {
    _State: {
        ProfilePage: {
            PostsData: [
                {id: 1, text: "Hi", likes: 3},
                {id: 2, text: "How are you", likes: 5},
                {id: 3, text: "It's my first post", likes: 33},
                {id: 4, text: "Are you", likes: 2},
                {id: 5, text: "Baby", likes: 1}
            ],
            NewPostText: 'Hi, baby'
        },
        MessagePage: {
            MessageData: [
                {path: 1, text: "Dima"},
                {path: 1, text: "Sangdfgya"},
                {path: 2, text: "Dimodfgfdgdfgn"},
                {path: 2, text: "Aledfgdfgdddx"},
                {path: 3, text: "Lodffgdfgfdx"}
            ],
            MessageText: '',
            DialogData: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Sanya"},
                {id: 3, name: "Dimon"},
                {id: 4, name: "Alex"},
                {id: 5, name: "Lox"}
            ]
        },
        SideBar: {
            FriendsData: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Sanya"},
                {id: 3, name: "Dimon"},
                {id: 4, name: "Alex"},
                {id: 5, name: "Kirill"}
            ]
        }
    },
    getState() {
        return this._State
    },
    _renderEntireTree() {
        console.log('sdkfjsf');
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },
    dispatch(action) {
        this._State.ProfilePage = profileReducer(this._State.ProfilePage, action);
        this._State.MessagePage = dialogsReducer(this._State.MessagePage, action);
        //this._State.SideBar = sidebarReducer(action, this._State.SideBar);

        this._renderEntireTree(this._State);
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const changeNewPostTextActionCreator = (postMessage) =>
    ({
        type: CHANGE_NEW_POST_TEXT,
        postMessage: postMessage
    })

export const changeMessage = (message) => ({
    type: CHANGE_MESSAGE,
    message: message
})

export const sendNewMessage = () => ({
    type: SEND_NEW_MESSAGE
})

window.state = store;


export default store;