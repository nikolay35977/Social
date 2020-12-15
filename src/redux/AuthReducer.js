import {AuthAPI} from "../api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA',
    SET_USER_PHOTO = 'SET-USER-PHOTO',
    SET_LOGIN_USER = 'SET-LOGIN-USER',
    WARNING_LOGIN_USER = 'WARNING-LOGIN-USER',
    SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photoSrc: null,
    urlCaptcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, urlCaptcha: null}
        case SET_USER_PHOTO:
            return {...state, photoSrc: action.photoSrc}
        case SET_LOGIN_USER:
            return {...state, isAuth: true, userId: action.userId}
        case WARNING_LOGIN_USER:
            return {...state, isAuth: false}
        case SET_CAPTCHA_URL:
            return {...state, urlCaptcha: action.url}
        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login, isAuth) =>
    ({
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    })

const setUserPhoto = (photoSrc) =>
    ({
        type: SET_USER_PHOTO,
        photoSrc
    })


const setWarningLoginUser = () =>
    ({
        type: WARNING_LOGIN_USER
    })

const setCaptchaURL = (url) =>
    ({
        type: SET_CAPTCHA_URL,
        url
    })

export const getAuth = () => {
    return (dispatch) => {
        return AuthAPI.getAuthAPI().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
                getPhoto(data.data.id);
            }
        })
    }
}

//connect it
export const getPhoto = (id) => {
    return async (dispatch) => {
        let data = await AuthAPI.getPhotoAPI(id)
        dispatch(setUserPhoto(data.photos.small));
    }
}
//

const getCaptcha = () => {
    return async (dispatch) => {
        let data = await AuthAPI.getCaptchaAPI();
        dispatch(setCaptchaURL(data.url));

    }
}


export const LoginUser = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await AuthAPI.postLoginUserAPI(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
            dispatch(getAuth());
        } else if (data.resultCode === 10) {
            dispatch(getCaptcha());
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit('login', {_error: message}));
            dispatch(setWarningLoginUser());
        }
    }
}

export const LogoutUser = () => {
    return async (dispatch) => {
        await AuthAPI.deleteLoginUserAPI();
        dispatch(setAuthUserData(null, null, null, false));
        
    }
}


export default authReducer