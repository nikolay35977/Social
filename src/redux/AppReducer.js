import {getAuth} from "./AuthReducer";

const SET_INITIALIZED = 'SET-INITIALIZED';


let initialState = {
    initialized: false
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}


const initializedSuccess = () =>
    ({
        type: SET_INITIALIZED
    })

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuth());
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })
    }
}


export default AppReducer