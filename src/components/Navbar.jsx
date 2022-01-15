import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../features/login/actionTypes";
import "./Navbar.css";

export const Navbar = () => {

    const { login } = useSelector((state) => ({
        login: state.loginState.login,
    }));

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(loginSuccess(true));
    }

    return (
        <div className="header">
            <h3 className="link">Search Users</h3>
            <button className="logoutBtn" onClick={handleLogout}>Logout</button>
        </div>
    )
}