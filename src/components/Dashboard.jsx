import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getData } from "../features/users/actionTypes";
import "./Dashboard.css"

export const Dashboard = () => {
    const [username, setuserName] = useState("");

    const { loading, user } = useSelector((state) => ({
        loading: state.userState.loading,
        user: state.userState.user,
    }));

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setuserName(e.target.value);
    }

    function getUsers() {
        dispatch(getData(username));
    }
    
    const handleSearch = () => {
        getUsers();
    }

    return (
        <div>
            <input onChange={handleChange} name="username" type="text" placeholder="Enter username" />
            <button className="searchBtn" onClick={handleSearch} >Search</button>
            {user.map((e) => (
                <div>
                    <img style={{width:"200px", borderRadius:"50%"}} src={e.avatar_url} />
                    <div>{e.login}</div>
                </div>
            ))}
        </div>
    )
}