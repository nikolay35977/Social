import Axios from "axios";

const axiosInstance = Axios.create({
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            "API-KEY": 'ad07657d-beba-4fc8-ab95-b86c6275f128'
        },
        data: {}
    }
)

export const ProfileAPI = {
    getProfileAPI(id) {
        return axiosInstance.get(`profile/${id}`).then(response => response.data);
    },
    updateStatusAPI(newStatus) {
        return axiosInstance.put(`profile/status`, {status: newStatus}).then(response => response.data);
    },
    getStatusAPI(id) {
        return axiosInstance.get(`profile/status/${id}`).then(response => response.data);
    }
}

export const AuthAPI = {
    postLoginUserAPI(email, password, rememberMe = false, captcha = undefined) {
        return axiosInstance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data);
    },

    deleteLoginUserAPI() {
        return axiosInstance.delete(`auth/login`).then(response => response.data);
    },

    getCaptchaAPI() {
        return axiosInstance.get(`security/get-captcha-url`).then(response => response.data);
    },
    getAuthAPI() {
        return axiosInstance.get(`auth/me`).then(response => response.data)
    },

    getPhotoAPI(UserId) {
        return axiosInstance.get(`profile/${UserId}`).then(response => response.data)
    }
}

export const UsersAPI = {

    getUsersAPI(el = '1', pageSize = '10') {
        return axiosInstance.get(`users?page=${el}&count=${pageSize}`).then(response => response.data)
    },

    deleteFollowAPI(id) {
        return axiosInstance.delete(`follow/${id}`).then(response => response.data)
    },

    putFollowAPI(id) {
        return axiosInstance.post(`follow/${id}`).then(response => response.data)
    }
}

export const MessageAPI = {
    postNewMessageAPI(userId, message) {
        return axiosInstance.post(`dialogs/${userId}/messages`, {...message}).then(response => response.data);
    }
}