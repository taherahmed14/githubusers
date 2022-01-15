import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./action";

const init = { loading: false, login: false, error: false };
export const reducer = (state = init, { type, payload }) => {
    switch(type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
            }

        case LOGIN_SUCCESS:
            if(!payload){
                return {
                    ...state,
                    loading: false,
                    login: true,
                }
            }

            else{
                return {
                    ...state,
                    loading: false,
                    login: false,
                }
            }
                
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state;
    }
}