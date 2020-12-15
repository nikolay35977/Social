import {UsersAPI} from "../api/Api";
import {updateObjectInArray} from "../utils/helpers/object-helpers";

const UNFOLLOW = "UNFOLLOW",
    FOLLOW = "FOLLOW",
    SET_USERS = "SETUSERS",
    SET_CURRENT_PAGE = "SETCURRENTPAGE",
    SET_TOTAL_COUNT = "SETTOTALCOUNT",
    SET_IS_FETCHING = "SETISFETCHING",
    SET_FOLLOWING_PROGRESS = "SET-FOLLOWING-PROGRESS";

let initialState = {
    Users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetchingNow: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, Users: updateObjectInArray(state.Users, action.id, "id", {followed: true})}
        case UNFOLLOW:
            return {...state, Users: updateObjectInArray(state.Users, action.id, "id", {followed: false})}
        case SET_USERS:
            return {...state, Users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count};
        case SET_IS_FETCHING:
            return {...state, isFetchingNow: action.isFetch};
        case SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followU = (id) =>
    ({
        type: FOLLOW,
        id
    })

export const unFollow = (id) =>
    ({
        type: UNFOLLOW,
        id
    })

export const setUsers = (users) =>
    ({
        type: SET_USERS,
        users
    })

export const setCurrentPage = (page) =>
    ({
        type: SET_CURRENT_PAGE,
        page
    })

export const setTotalCount = (count) =>
    ({
        type: SET_TOTAL_COUNT,
        count
    })

const isFetching = (isFetch) =>
    ({
        type: SET_IS_FETCHING,
        isFetch
    })

export const setFollowingProgress = (isFetching, userId) =>
    ({
        type: SET_FOLLOWING_PROGRESS,
        isFetching,
        userId
    })


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(isFetching(true));
        let data = await UsersAPI.getUsersAPI(currentPage, pageSize);
        dispatch(isFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, id, methodAPI, actionCreator) => {
    dispatch(setFollowingProgress(true, id));
    let data = await methodAPI(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
        dispatch(setFollowingProgress(false, id));
    }
}

export const deleteFollow = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, UsersAPI.deleteFollowAPI.bind(UsersAPI), unFollow);
    }
}

export const putFollow = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, UsersAPI.putFollowAPI.bind(UsersAPI), followU);
    }
}

export default usersReducer