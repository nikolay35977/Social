import {ProfileAPI} from "../api/Api";
import {reset} from 'redux-form';

const ADD_POST = 'social/Profile/ADD-POST',
    SET_USER_PAGE = 'social/Profile/SET-USER-PAGE',
    IS_FETCHING_NOW = 'social/Profile/IS-FETCHING-NOW',
    GET_USER_STATUS = 'social/Profile/GET-USER-STATUS',
    DELETE_POST = 'social/Profile/DELETE-POST';


let initialState = {
    PostsData: [
        {id: 1, text: "Hi", likes: 3},
        {id: 2, text: "How are you", likes: 5},
        {id: 3, text: "It's my first post", likes: 33},
        {id: 4, text: "Are you", likes: 2},
        {id: 5, text: "Baby", likes: 1}
    ],
    status: '----',
    UserProfile: null,
    isFetchingNow: false
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST:
            let newId = stateCopy.PostsData.length + 1;
            let newPost = {
                id: newId,
                text: action.postText,
                likes: 0
            }
            stateCopy.PostsData = [...state.PostsData];
            stateCopy.PostsData.push(newPost);
            return stateCopy;
        case SET_USER_PAGE:
            return {...state, UserProfile: action.info}
        case IS_FETCHING_NOW:
            return {...state, isFetchingNow: action.isFetching}
        case GET_USER_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            debugger;
            return {...state, PostsData: state.PostsData.filter(el => el.id !== action.id)}
        default:
            return state;
    }
}

export const setUserPage = (info) =>
    ({
        type: SET_USER_PAGE,
        info
    })

export const isFetchingNow = (isFetching) =>
    ({
        type: IS_FETCHING_NOW,
        isFetching
    })

export const setUserStatus = (status) =>
    ({
        type: GET_USER_STATUS,
        status
    })

export const setNewPost = (postText) =>
    ({
        type: ADD_POST,
        postText
    })

export const deletePost = (id) =>
    ({
        type: DELETE_POST,
        id
    })


export const getUserStatus = (id) => {
    return (dispatch) => {
        ProfileAPI.getStatusAPI(id).then(response => {
            dispatch(setUserStatus(response))
        })
    }
}

export const getProfile = (id) => {
    return async (dispatch) => {
        dispatch(isFetchingNow(true));
        let response = await ProfileAPI.getProfileAPI(id)
        dispatch(setUserPage(response));
        dispatch(isFetchingNow(false));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await ProfileAPI.updateStatusAPI(status)
        if (response.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export const addNewPost = (data) => {
    return (dispatch) => {
        dispatch(setNewPost(data.postText));
        dispatch(reset('post'));
    }
}


export default profileReducer