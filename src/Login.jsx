import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    function handleChange(e) {
        setUser(e.target.value);
    }

    function loginHandler() {
        
       navigate("/Chatbox" , { state: { username: user } })
    
    }

    return (
        <div className="login">
            <h1>Chat-app</h1>
            <form action="" onSubmit={loginHandler}>
            <input type="text" placeholder="UserName" onChange={handleChange} value={user}  required/><br />
            <button type="submit">Signin</button>
            </form>
        </div>
    );
}
