import { USER_SUCCESS, USER_ERROR, USER_LOADING } from "./action";

const init = { loading: false, user: [], error: false };
export const reducer = (state = init, { type, payload }) => {
    switch(type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true,
            }

        case USER_SUCCESS:
                return {
                    ...state,
                    user: payload,
                    loading: false,
                }

        case USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state;
    }
}