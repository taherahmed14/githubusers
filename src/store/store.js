import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as registerReducer } from "../features/register/reducer";
import { reducer as loginReducer } from "../features/login/reducer";
import { reducer as userReducer } from "../features/users/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    registerState: registerReducer,
    loginState: loginReducer,
    userState: userReducer
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()));