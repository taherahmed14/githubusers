import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerData } from "../features/register/actionTypes";
import "./Login.css";

export const Register = () => {

    const [form, setForm] = useState({});

    const { loading, register, error } = useSelector((state) => ({
        loading: state.registerState.loading,
        register: state.registerState.register,
        error: state.registerState.error,
    }));

    const dispatch = useDispatch();

    const handleChange = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value,
        })
    }

    const registerUser = () => {
        dispatch(registerData(form));
    }

    if(register){
        return <Navigate to={"/login"} />
    }

    return (
        loading ? <div>Loading...</div> :
        <div className="loginBox" style={{height:"500px"}}>
            <h3>Register</h3>
            <input name="name" onChange={handleChange} type="text" placeholder="Enter name" className="input" />
            <input name="email" onChange={handleChange} type="text" placeholder="Enter Email" className="input" />
            <input name="password" onChange={handleChange} type="text" placeholder="Enter password" className="input" />
            <input name="username" onChange={handleChange} type="text" placeholder="Enter username" className="input" />
            <input name="mobile" onChange={handleChange} type="text" placeholder="Enter mobile" className="input" />
            <input name="description" onChange={handleChange} type="text" placeholder="Enter description" className="input" />
            <button className="button" onClick={registerUser}>Submit</button>
            <br />
            <Link className="button" to={"/login"}>already have an account? Login</Link>
        </div>
    )
}