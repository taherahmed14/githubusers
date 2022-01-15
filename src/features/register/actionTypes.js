import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./action"

export const registerLoading = () => {
    return {
        type: REGISTER_LOADING,
    }
}

export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data,
    }
}

export const registerError = () => {
    return {
        type: REGISTER_ERROR,
    }
}

export const registerData = (form) => (dispatch) => {
    dispatch(registerLoading());
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((d) => d.json())
    .then((res) => {
        dispatch(registerSuccess(res.error));
    })
    .catch((err) =>{
        dispatch(registerError());
    });
}