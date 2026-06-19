import React, { useState, useContext } from "react";
import UserContext from "../context/Usercontext";

function Login(){
    const[username , setUsername] = useState('');
    const[password , setPassword] = useState('');

    const{setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return(
        <div>
            <h2>Login</h2>
            <input value={username} //Tells the input to display the current state
             onChange={(e) => setUsername(e.target.value)} 
             type="text" placeholder="Enter username" />
            <input value={password}
             onChange={(e) => setPassword(e.target.value)} 
             type="password" placeholder="Enter password" />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login