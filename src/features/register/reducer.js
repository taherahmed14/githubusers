import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "./action";

const init = { loading: false, register: false, error: false };
export const reducer = (state = init, { type, payload }) => {
    switch(type) {
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true,
            }

        case REGISTER_SUCCESS:
            if(!payload){
                return {
                    ...state,
                    loading: false,
                    register: true,
                }
            }

        case REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state;
    }
}