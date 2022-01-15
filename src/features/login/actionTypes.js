import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./action"

export const loginLoading = () => {
    return {
        type: LOGIN_LOADING,
    }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    }
}

export const loginError = () => {
    return {
        type: LOGIN_ERROR,
    }
}

export const loginUser = (form) => (dispatch) => {
    dispatch(loginLoading());
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((d) => d.json())
        .then((res) => {
            dispatch(loginSuccess(res.error));
        })
        .catch((err) => {
            dispatch(loginError(err));
        })
}