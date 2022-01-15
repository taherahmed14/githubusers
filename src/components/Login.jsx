import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "../features/login/actionTypes";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {

    const [form, setForm] = useState({});

    const handleChange = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value,
        })
    };

    const { loading, login, error } = useSelector((state) => ({
        loading: state.loginState.loading,
        login: state.loginState.login,
        error: state.loginState.error,
    }));

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(loginUser(form));
    }

    if(login){
        return <Navigate to={"/dashboard"} />
    }

    return (
        loading ? <div>loading...</div>
        :
        <div className="loginBox">
            <h3>Login</h3>
            <input onChange={handleChange} name="username" type="text" placeholder="Enter username" className="input"  />
            <input onChange={handleChange} name="password" type="text" placeholder="Enter password" className="input"  />
            <button className="button" onClick={handleSubmit}>Login</button>
            <Link className="button" to={"/register"}>Signup</Link>
        </div>
    )
}