import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { loading, login, error } = useSelector((state) => ({
        loading: state.loginState.loading,
        login: state.loginState.login,
        error: state.loginState.error,
    }));

    if(!login){
        return <Navigate to={"/login"} />
    }

    return children;
};