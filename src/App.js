import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import "./App.css";
import store from "./redux/Redux-store";
import {Provider} from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {initializeApp} from "./redux/AppReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/commonFiles/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)  return (<Preloader/>)
        return (
            <BrowserRouter>
                <div className="app__wrapper">
                    <HeaderContainer/>
                    <div className="container__inner">
                        <NavContainer/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <LoginContainer/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
}

export default MainApp;