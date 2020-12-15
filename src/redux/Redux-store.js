import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import AppReducer from "./AppReducer";

let redusers = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: dialogsReducer,
    SideBar: sidebarReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;