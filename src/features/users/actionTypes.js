import { USER_ERROR, USER_LOADING, USER_SUCCESS } from "./action"

export const userLoading = () => {
    return {
        type: USER_LOADING,
    }
}

export const userSuccess = (data) => {
    return {
        type: USER_SUCCESS,
        payload: data,
    }
}

export const userError = () => {
    return {
        type: USER_ERROR,
    }
}

export const getData = (username) => (dispatch) => {
    dispatch(userLoading());
    fetch(`https://api.github.com/search/users?q=${username}`)
    .then((d) => d.json())
    .then((res) => {
        dispatch(userSuccess(res.items));
    })
    .catch((err) => {
        dispatch(userError());
    })
}