/*
селекторы
export const getUsersS = (state) => {
    return state.UsersPage.Users
}

export const getPageSizeS = (state) => {
    return state.UsersPage.pageSize
}

export const getTotalUsersCountS = (state) => {
    return state.UsersPage.totalUsersCount
}

export const getCurrentPageS = (state) => {
    return state.UsersPage.currentPage
}

export const getIsFetchingNowS = (state) => {
    return state.UsersPage.isFetchingNow
}

export const getFollowingInProgressS = (state) => {
    return state.UsersPage.followingInProgress
}*/

//норм селектор через библиотеку
//селекторы сохраняют в кеше значения, чтобы не пересчитывать заново и не выделять память под массив.

import {createSelector} from "reselect";

export const getUsersS = (state) => {
    return state.UsersPage.Users
}

export const NewSelector = createSelector(getUsersS, (users) => {
    return users.filter(u => true);
})

//use NewSelector createSelector(getUsersS, ......, (users, ......) => {....})